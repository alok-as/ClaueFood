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
	checkIfValidUpdate,
	computeTime,
	cookieExtractor,
	generateToken,
	parseQueryParams,
};
