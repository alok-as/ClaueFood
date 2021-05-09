const asyncHandler = require("express-async-handler");
const Product = require("../models/product");
const Image = require("../models/image");

const uploadImageForProduct = asyncHandler(async (req, res) => {
	const { isPrimary } = req.body;
	const { productId } = req.params;

	const product = await Product.findById(productId);
	if (!product) {
		return res.status(400).send({
			success: false,
			data: null,
			message: "Product doesn't exist",
		});
	}

	const image = new Image({
		url: req.file.path,
		isPrimary,
		productId,
	});
	await image.save();

	res.status(201).send({
		success: true,
		data: null,
		message: "Image upload successfully",
	});
});

module.exports = {
	uploadImageForProduct,
};
