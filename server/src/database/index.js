const redis = require("redis");
const mongoose = require("mongoose");

const redisPort = process.env.REDIS_PORT || 6379;
const connectionURI = process.env.CONNECTION_URI;

const redisClient = redis.createClient(redisPort);
redisClient.on("error", (error) => {
	console.log("Error connecting to redis server:", error.message);
	process.exit(1);
});

const connectToDatabase = async () => {
	try {
		const conn = await mongoose.connect(connectionURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log("Database is connected to host", conn.connection.host);
	} catch {
		console.log("Error connection to database", error.message);
		process.exit(1);
	}
};

module.exports = { connectToDatabase, redisClient };
