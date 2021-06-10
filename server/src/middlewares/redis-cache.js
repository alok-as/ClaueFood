const { redisClient } = require("../database");

const cache = (successMessage) => (req, res, next) => {
	const { slug } = req.params;

	redisClient.get(slug, (error, cachedData) => {
		if (error) {
			console.log("Error extracting data from cache:", error.message);
			return next();
		}

		if (!cachedData) {
			return next();
		}

		return res.send({
			success: true,
			data: JSON.parse(cachedData),
			message: successMessage,
		});
	});
};

module.exports = {
	cache,
};
