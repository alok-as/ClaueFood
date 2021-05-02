const asyncHandler = require("express-async-handler");
const Review = require("../models/review");

const createReview = asyncHandler(async (req, res) => {
	const review = new Review({ ...req.body });
	await review.save();

	res.send({
		success: true,
		data: null,
		message: "Review submitted successfully",
	});
});

module.exports = {
	createReview,
};
