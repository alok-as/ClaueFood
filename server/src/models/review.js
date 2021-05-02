const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		productId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		review: {
			type: "String",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
