const cookieExtractor = (req) => {
	let token = null;

	if (req.cookies) {
		token = req.cookies["authToken"];
	}
	return token;
};

module.exports = {
	cookieExtractor,
};
