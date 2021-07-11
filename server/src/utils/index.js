const jwt = require("jsonwebtoken");
const privateKey = require("../../config/keys");

const cookieExtractor = (req) => {
	let token = null;

	if (req.cookies) {
		token = req.cookies["authToken"];
	}
	return token;
};

const checkIfValidUpdate = (reqBody, allowedUpdates) => {
	const updates = Object.keys(reqBody);
	const isValidUpdate = updates.every((update) =>
		allowedUpdates.includes(update)
	);

	return isValidUpdate;
};

const generateRedisKey = (collection, options) => {
	const keyObject = Object.assign({}, options, { collection });
	const key = JSON.stringify(keyObject);
	return key;
};

const generateToken = (_id, email, expiresIn) => {
	return jwt.sign({ _id, email }, privateKey, {
		expiresIn,
	});
};

const parseQueryParams = (params) => {
	const { sortBy, order, limit, skip, ...filter } = params;
	const sort = {};

	if (sortBy) {
		sort[sortBy] = order === "desc" ? -1 : 1;
	}

	return { filter, order, sort, limit, skip };
};

const calculateAuthTokenExpiration = () => {
	const [accessValue, accessUnit] =
		process.env.ACCESS_TOKEN_EXPIRATION.split(" ");

	const [refreshValue, refreshUnit] =
		process.env.REFRESH_TOKEN_EXPIRATION.split(" ");

	const accessTokenExpiry = computeTime(accessValue, accessUnit);
	const refreshTokenExpiry = computeTime(refreshValue, refreshUnit);

	return [accessTokenExpiry, refreshTokenExpiry];
};

const setCookiesForAuthentication = (res) => {};

const computeTime = (value, unit) => {
	switch (unit) {
		case "seconds":
			return value;
		case "minutes":
			return value * 60;
		case "hours":
			return value * 60 * 60;
		case "days":
			return value * 60 * 60 * 24;
		default:
			return value;
	}
};

module.exports = {
	calculateAuthTokenExpiration,
	checkIfValidUpdate,
	computeTime,
	cookieExtractor,
	generateRedisKey,
	generateToken,
	parseQueryParams,
};
