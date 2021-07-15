const User = require("../models/user");
const { redisClient } = require("../database");

const isAuthenticated = async (req, res, next) => {
	try {
		const { accessToken, refreshToken } = req.cookies;

		if (accessToken) {
			const userId = await redisClient.get(accessToken);
			if (!userId) {
				return res.status(401).send();
			}

			const user = await User.findById(userId);
			req.user = user;
			return next();
		}

		if (refreshToken) {
			const userId = await redisClient.get(refreshToken);

			if (!userId) {
				return res.status(401).send();
			}

			return res.status(401).send({
				success: false,
				data: {
					userId,
				},
				code: 490,
			});
		}

		return res.status(401).send();
	} catch (error) {
		console.log("Error checking is Authenticated", error.messaage);
		res.status(401).send();
	}
};

const isAuthorized = (role) => (req, res, next) => {
	if (!req.user.role.includes(role)) {
		return res.status(403).send();
	}

	next();
};

module.exports = { isAuthenticated, isAuthorized };
