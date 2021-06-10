const User = require("../models/user");
const { redisClient } = require("../database");

const isAuthenticated = (req, res, next) => {
	const { accessToken, refreshToken } = req.cookies;

	redisClient.get(accessToken, async (error, userId) => {
		if (error) {
			console.log("Error finding accessToken in redis:", error.message);
		}

		if (!userId) {
			redisClient.get(refreshToken, async (error, id) => {
				if (error) {
					console.log("Error finding refreshToken in redis:", error.message);
					return res.status(401).send();
				}

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
			});
		}

		const user = await User.findById(userId);
		req.user = user;
		next();
	});
};

const isAuthorized = (role) => (req, res, next) => {
	if (!req.user.role.includes(role)) {
		return res.status(403).send();
	}

	next();
};

module.exports = { isAuthenticated, isAuthorized };
