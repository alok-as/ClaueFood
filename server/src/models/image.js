const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
	url: {
		type: String,
		required: true,
	},
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product",
	},
	isPrimary: {
		type: Boolean,
		default: false,
	},
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
