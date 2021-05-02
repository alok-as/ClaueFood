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

module.exports = {
	cookieExtractor,
	checkIfValidUpdate,
};
