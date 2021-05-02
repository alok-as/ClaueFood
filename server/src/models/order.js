const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		products: [
			{
				quantity: {
					type: Number,
					required: true,
				},
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
					required: true,
				},
			},
		],
		paymentMethod: {
			type: String,
			enum: ["Cash on Delivery", "UPI", "Netbanking"],
		},
		isPaid: {
			type: Boolean,
			default: false,
		},
		status: {
			type: String,
			enum: [
				"Placed",
				"Dispatched",
				"Shipped",
				"Out for delivery",
				"Delivered",
				"Cancelled",
			],
			default: "Placed",
		},
		deliveredAt: {
			type: Date,
		},
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
