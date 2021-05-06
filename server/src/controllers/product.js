const asyncHandler = require("express-async-handler");
const Product = require("../models/product");

const createProduct = asyncHandler(async (req, res) => {
	const { title, userId } = req.body;
	const isExisiting = await Product.checkIfExistingProduct(title);

	if (isExisiting) {
		res.status(409);
		throw new Error(`Product with title ${title} already exists`);
	}

	const product = new Product({ ...req.body, seller: userId });
	await product.save();

	res.status(201).send({
		success: true,
		data: product,
		message: "Product created successfully",
	});
});

const fetchAllProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({}).populate("images").lean();

	const transformedProducts = products.map((product) => ({
		...product,
		images: product.images,
	}));

	res.send({
		success: true,
		data: transformedProducts,
		message: "Products successfully fetched",
	});
});

const fetchProductById = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const product = await Product.findById(id);

	await product
		.populate({
			path: "reviews",
			populate: { path: "user", select: "firstName lastName" },
		})
		.populate({
			path: "images",
		})
		.execPopulate();

	if (!product) {
		return res.send({
			success: false,
			data: product,
			message: "Product not found",
		});
	}

	return res.send({
		success: true,
		data: { product, reviews: product.reviews, images: product.images },
		message: "Product successfully fetched",
	});
});

module.exports = {
	createProduct,
	fetchAllProducts,
	fetchProductById,
};
