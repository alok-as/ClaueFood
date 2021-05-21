const crypto = require("crypto");
const express = require("express");
const razorpay = require("razorpay");

const router = express.Router();

const generateReceiptId = (size = 17) => {
	return crypto.randomBytes(size).toString("base64");
};

router.get("/", async (req, res) => {
	try {
		const instance = new razorpay({
			key_id: process.env.RAZOR_PAY_KEY_ID,
			key_secret: process.env.RAZOR_PAY_KEY_SECRET,
		});

		const order = await instance.orders.create({
			amount: 500,
			currency: "INR",
			receipt: generateReceiptId(),
		});

		res.send({
			message: "Order generated",
			data: {
				id: order.id,
				amount: order.amount * 100,
				currency: order.currency,
			},
			success: true,
		});
	} catch (error) {
		console.log("Error creating order", error);
	}
});

module.exports = router;
