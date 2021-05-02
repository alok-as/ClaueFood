const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product",
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
		paymentMethod: {
			type: String,
			enum: ["Cash on Delivery", "UPI", "Netbanking"],
		},
		isPaid: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
