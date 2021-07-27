const util = require("util");
const redis = require("redis");
const mongoose = require("mongoose");

const { generateRedisKey } = require("../utils");

const connectionURI = process.env.CONNECTION_URI;
const redisPort = process.env.REDIS_PORT || 6379;

const connectToDatabase = async () => {
	try {
		const conn = await mongoose.connect(connectionURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log("Database is connected to host", conn.connection.host);
	} catch {
		console.log("Error connecting to database", error.message);
		process.exit(1);
	}
};

const redisClient = redis.createClient(redisPort);
redisClient.get = util.promisify(redisClient.get);
redisClient.hget = util.promisify(redisClient.hget);

redisClient.on("connect", () => {
	console.log(`Server is connected to redis on port : ${redisPort}`);
});

redisClient.on("error", (error) => {
	console.log("Error connecting to redis server:", error.message);
});

const modifyMongooseExec = () => {
	const exec = mongoose.Query.prototype.exec;

	mongoose.Query.prototype.exec = async function () {
		if (!this.useCache) {
			return exec.apply(this, arguments);
		}

		const key = generateRedisKey(this.mongooseCollection.name, this.getQuery());
		const cachedResult = await redisClient.hget(this.redisHashKey, key);

		if (cachedResult) {
			console.log("From Cache");
			const doc = JSON.parse(cachedResult);
			const result = Array.isArray(doc)
				? doc.map((d) => new this.model(d))
				: new this.model(doc);
			return result;
		}

		const result = await exec.apply(this, arguments);
		if (result) {
			console.log("Not From Cache");
			redisClient.hset(
				this.redisHashKey,
				key,
				JSON.stringify(result),
				"EX",
				this.cacheExpiresIn
			);
		}
		return result;
	};
};

const addCacheToMongooseQuery = () => {
	mongoose.Query.prototype.cache = function (options = {}) {
		this.useCache = true;
		this.redisHashKey = JSON.stringify(options.key || "");
		this.cacheExpiresIn = options.expiresIn;
		return this;
	};
};

const clearRedisCache = (redisHashKey) => {
	redisClient.del(JSON.stringify(redisHashKey));
};

module.exports = {
	connectToDatabase,
	clearRedisCache,
	modifyMongooseExec,
	addCacheToMongooseQuery,
	redisClient,
};
