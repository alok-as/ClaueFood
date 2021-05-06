const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
		},
		price: {
			type: Number,
			required: true,
		},
		discount: {
			type: Number,
			required: false,
		},
		dicountedPrice: {
			type: Number,
			required: false,
		},
		description: {
			type: String,
			required: true,
		},
		characterstics: {
			type: Array,
			required: true,
		},
		stock: {
			type: Number,
			required: true,
		},
		seller: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

productSchema.statics.checkIfExistingProduct = async function (title) {
	const product = await this.findOne({ title });
	if (product) {
		return true;
	}

	return false;
};

productSchema.virtual("reviews", {
	ref: "Review",
	foreignField: "productId",
	localField: "_id",
});

productSchema.virtual("images", {
	ref: "Image",
	foreignField: "productId",
	localField: "_id",
});

productSchema.pre("save", function (next) {
	const product = this;
	const slug = slugify(product.title, {
		lower: true,
	});

	if (product.discount) {
		const discountedPrice =
			product.price - (product.price * product.discount) / 100;
		product.dicountedPrice = discountedPrice;
	}

	product.slug = slug;
	next();
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
