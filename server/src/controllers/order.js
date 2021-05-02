const asyncHandler = require("express-async-handler");
const Order = require("../models/order");
const Product = require("../models/product");
const { checkIfValidUpdate } = require("../utils");

const placeOrder = asyncHandler(async (req, res) => {
	const { products } = req.body;

	for (let product of products) {
		const { product: productId, quantity } = product;
		const orderedProduct = await Product.findById(productId);
		orderedProduct.stock = orderedProduct.stock - quantity;
		await orderedProduct.save();
	}

	const order = new Order({ ...req.body });
	await order.save();

	res.send({
		success: true,
		data: order,
		message: "Order placed successfully",
	});
});

const updateOrderById = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const order = await Order.findById(id);

	if (!order) {
		return res.status(404).send({
			success: false,
			data: null,
			message: "Order doesn't exists",
		});
	}

	const allowedUpdates = ["status", "deliveredAt", "isPaid"];
	const isValidUpdate = checkIfValidUpdate(req.body, allowedUpdates);

	if (!isValidUpdate) {
		return res.status(400).send({
			sucess: false,
			data: "",
			message: "Update not allowed",
		});
	}

	const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
		new: true,
		runValidators: true,
	});

	res.send({
		success: true,
		data: updatedOrder,
		message: "Order updated successfully",
	});
});

module.exports = {
	placeOrder,
	updateOrderById,
};
