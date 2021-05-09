const asyncHandler = require("express-async-handler");
const Cart = require("../models/cart");

const addProductToCart = asyncHandler(async (req, res) => {
	const { userId, productId } = req.params;
	const cart;

	res.status(201).send({
		success: true,
		data: product,
		message: "Product created successfully",
	});
});

module.exports = {
	addProductToCart,
};
