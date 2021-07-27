const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Product = require("../models/product");
const { setCookiesForAuthentication } = require("../utils");

const registerUser = asyncHandler(async (req, res) => {
	const { email } = req.body;
	const isExistingUser = await User.checkIfExistingUser(email);

	if (isExistingUser) {
		res.status(409);
		throw new Error(`User with ${email} already exists`);
	}

	const user = new User({ ...req.body });
	await user.save();

	await setCookiesForAuthentication(res, user);
	res.status(201).send({
		success: true,
		data: user,
		message: "User successfully created",
	});
});

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (!user) {
		res.status(404);
		throw new Error(`Invalid email or password!`);
	}

	const isVerified = await user.verifyPassword(password);
	if (!isVerified) {
		res.status(400);
		throw new Error(`Invalid email or password!`);
	}

	await setCookiesForAuthentication(res, user);
	res.status(200).send({
		success: true,
		message: "User successfully logged in",
		data: null,
	});
});

const loginUserWithGoogle = asyncHandler(async (req, res) => {
	console.log("Checking Oauth User", req.user);
	await setCookiesForAuthentication(res, req.user);
	res.redirect(process.env.ORIGIN);
});

const issueAuthenticationTokens = asyncHandler(async (req, res) => {
	const { userId } = req.params;
	const user = await User.findById(userId);

	await setCookiesForAuthentication(res, user);
	res.status(200).send({
		success: true,
		message: "Tokens successfully resissued",
		data: null,
	});
});

const addProductToUserWishlist = asyncHandler(async (req, res) => {
	const userId = req.user._id;
	const { productId } = req.params;

	const product = await Product.findById(
		productId,
		"slug title images price discountedPrice"
	);

	console.log("Checking Product", product);

	if (!product) {
		return res.status(400).send({
			success: false,
			data: null,
			message: "Product doesn't exist",
		});
	}

	const user = await User.findById(userId);
	if (user.wishlist.includes(productId)) {
		return res.send({
			success: true,
			data: null,
			message: "Product already present in your Wishlist",
		});
	}

	user.wishlist = user.wishlist.concat(productId);
	await user.save();

	res.send({
		success: true,
		data: product,
		message: "Product successfully added to your Wishlist",
	});
});

const fetchUserWishlist = asyncHandler(async (req, res) => {
	const userId = req.user._id;
	const user = await User.findById(userId)
		.populate("wishlist", "slug title images price discountedPrice")
		.cache();

	res.send({
		success: true,
		data: user.wishlist,
		message: "User Wishlist fetched successfully",
	});
});

const addProductToUserCart = asyncHandler(async (req, res) => {
	const userId = req.user._id;
	const { productId } = req.params;

	const user = await User.findById(userId);
	let isAlreadyPresent = false;

	for (let item of user.cart) {
		if (item.product == productId) {
			item.quantity++;
			isAlreadyPresent = true;
			break;
		}
	}

	if (!isAlreadyPresent) {
		user.cart.push({ quantity: 1, product: productId });
	}

	await user.save();
	await user
		.populate({
			path: "cart",
			populate: {
				path: "product",
				populate: { path: "images", select: "url isPrimary -_id" },
			},
		})
		.execPopulate();

	const cartObj = await user.cart.toObject();
	console.log("Checking Cart Object", cartObj);

	const addedProduct = cartObj.find((item) => item.product._id == productId);
	console.log("Checking Added Product", addedProduct);

	res.send({
		success: true,
		data: addedProduct,
		message: "Product successfully added to your cart",
	});
});

const removeProductFromUserCart = asyncHandler(async (req, res) => {
	const userId = req.user._id;
	const { productId } = req.params;

	const user = await User.findById(userId);
	const productIndex = user.cart.findIndex((item) => item.product == productId);

	if (productIndex === -1) {
		return res.status(404).send({
			success: false,
			data: null,
			message: "Product doesn't exists in cart",
		});
	}
	user.cart.splice(productIndex, 1);
	await user.save();

	res.send({
		success: true,
		data: null,
		message: "Product successfully removed from your cart",
	});
});

const fetchUserCart = asyncHandler(async (req, res) => {
	console.log("Checking Req User", req.user);
	const userId = req.user._id;
	const user = await User.findById(userId)
		.populate({
			path: "cart",
			populate: {
				path: "product",
				select: "title price stock discountedPrice description",
			},
		})
		.cache();

	res.send({
		success: true,
		data: user.cart,
		message: "User cart fetched successfully",
	});
});

const fetchUserDetails = asyncHandler(async (req, res) => {
	res.status(200).send({
		success: true,
		data: req.user,
		message: "User profile fetched successfully",
	});
});

module.exports = {
	registerUser,
	issueAuthenticationTokens,
	loginUser,
	loginUserWithGoogle,
	fetchUserDetails,
	addProductToUserWishlist,
	fetchUserWishlist,
	addProductToUserCart,
	removeProductFromUserCart,
	fetchUserCart,
};
