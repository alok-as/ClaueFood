const crypto = require("crypto");
const asyncHandler = require("express-async-handler");
const razorpay = require("razorpay");

const generateReceiptId = (size = 17) => {
	return crypto.randomBytes(size).toString("base64");
};

const generatePayment = asyncHandler(async (req, res) => {
	await req.user
		.populate({
			path: "cart",
			populate: {
				path: "product",
				select: "price discountedPrice",
			},
		})
		.execPopulate();

	const instance = new razorpay({
		key_id: process.env.RAZOR_PAY_KEY_ID,
		key_secret: process.env.RAZOR_PAY_KEY_SECRET,
	});

	const cart = req.user.cart;
	const amount = cart.reduce((acc, item) => {
		if (item.product.discountedPrice) {
			return acc + item.quantity * item.product.discountedPrice;
		}
		return acc + item.quantity * item.product.price;
	}, 0);

	const payment = await instance.orders.create({
		amount,
		currency: "INR",
		receipt: generateReceiptId(),
	});

	res.send({
		message: "Payment successfully generated",
		data: {
			id: payment.id,
			amount: payment.amount * 100,
			currency: payment.currency,
		},
		success: true,
	});
});

const capturePayment = asyncHandler(async (req, res) => {
	console.log("Checking Razor pay data", req.body);
	res.status(200).send({ status: "ok" });
});

module.exports = {
	generatePayment,
	capturePayment,
};
