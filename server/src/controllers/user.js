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

	res.send({
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

const fetchUserDetails = asyncHandler(async (req, res) => {
	console.log("Successfully authenticated", req.user);
	res.send({});
});

module.exports = {
	registerUser,
	loginUser,
	fetchUserDetails,
};
