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

	res.send({
		success: true,
		data: products,
		message: "Products successfully fetched",
	});
});

const fetchProductBySlug = asyncHandler(async (req, res) => {
	const { slug } = req.params;
	const product = await Product.findOne({ slug })
		.lean()
		.populate({
			path: "reviews",
			populate: { path: "user", select: "firstName lastName" },
		})
		.populate({
			path: "images",
			select: "-_id -__v",
		});

	if (!product) {
		return res.send({
			success: false,
			data: null,
			message: "Product not found",
		});
	}

	return res.send({
		success: true,
		data: product,
		message: "Product successfully fetched",
	});
});

const deleteProductById = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const product = await Product.findById(id);

	if (!product) {
		return res.status(404).send({
			success: false,
			data: null,
			message: "Product doesn't exists",
		});
	}

	await product.remove();
	res.status(204).send({
		success: true,
		data: product,
		message: "Product deleted successfully",
	});
});

module.exports = {
	createProduct,
	fetchAllProducts,
	fetchProductBySlug,
	deleteProductById,
};
