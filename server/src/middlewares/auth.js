const User = require("../models/user");
const { redisClient } = require("../database");

const isAuthenticated = async (req, res, next) => {
	try {
		const { accessToken, refreshToken } = req.cookies;
		const userId = await redisClient.get(accessToken);

		if (!userId) {
			const id = await redisClient.get(refreshToken);

			if (!id) {
				return res.status(401).send();
			}

			return res.status(401).send({
				success: false,
				data: {
					userId: id,
				},
				code: 490,
			});
		}

		const user = await User.findById(userId);
		req.user = user;
		next();
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
