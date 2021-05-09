const asyncHandler = require("express-async-handler");
const User = require("../models/user");

const registerUser = asyncHandler(async (req, res) => {
	const { email } = req.body;
	const isExistingUser = await User.checkIfExistingUser(email);

	if (isExistingUser) {
		res.status(409);
		throw new Error(`User with ${email} already exists`);
	}

	const user = new User({ ...req.body });
	await user.save();

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
		res.status(401);
		throw new Error(`Invalid email or password!`);
	}

	const authToken = await user.generateAuthToken();
	res.cookie("authToken", authToken, { httpOnly: true, maxAge: 60 * 1000 });

	res.status(200).send({
		success: true,
		message: "User successfully logged in",
		data: null,
	});
});

const addProductToUserWishlist = asyncHandler(async (req, res) => {
	const { userId } = req.body;
	const { productId } = req.params;

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
		data: null,
		message: "Product successfully added to your Wishlist",
	});
});

const fetchUserWishlist = asyncHandler(async (req, res) => {
	const { userId } = req.body;
	const user = await User.findById(userId).populate("wishlist");

	res.send({
		success: true,
		data: user.wishlist,
		message: "User Wishlist fetched successfully",
	});
});

const addProductToUserCart = asyncHandler(async (req, res) => {
	const { userId } = req.body;
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

	const transformedCart = [];
	const cartObj = await user.cart.toObject();

	for (let item of cartObj) {
		transformedCart.push({
			...item.product,
			quantity: item.quantity,
		});
	}

	res.send({
		success: true,
		data: transformedCart,
		message: "Product successfully added to your cart",
	});
});

const fetchUserCart = asyncHandler(async (req, res) => {
	const { userId } = req.body;
	const user = await User.findById(userId).populate("cart");

	res.send({
		success: true,
		data: user.cart,
		message: "User cart fetched successfully",
	});
});

const fetchUserDetails = asyncHandler(async (req, res) => {
	console.log("Successfully authenticated", req.user);
	res.send({});
});

module.exports = {
	registerUser,
	loginUser,
	fetchUserDetails,
	addProductToUserWishlist,
	fetchUserWishlist,
	addProductToUserCart,
	fetchUserCart,
};
