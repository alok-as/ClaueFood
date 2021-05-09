const errorHandler = (error, req, res, next) => {
	let message = error.message;
	res.statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	console.log("Error:", message);

	res.send({
		success: false,
		data: null,
		message,
	});
};

const notFound = (req, res, next) => {
	const error = new Error(`Not Found - ${req.originalUrl}`);
	res.status(404);
	next(error);
};

module.exports = {
	errorHandler,
	notFound,
};
