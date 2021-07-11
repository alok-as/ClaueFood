const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { isEmail, isMobilePhone } = require("validator");
const { generateToken } = require("../utils");
const { redisClient } = require("../database");

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			validate: {
				validator: (value) => isEmail(value),
				message: ({ value }) => `${value} is not a valid email address`,
			},
			trim: true,
		},
		mobileNumber: {
			type: String,
			required: false,
			validate: {
				validator: (value) => isMobilePhone(value, "en-IN"),
				message: ({ value }) => `${value} is not a valid mobile number`,
			},
			trim: true,
		},
		password: {
			type: String,
			required: false,
			trim: true,
		},
		accessToken: {
			type: String,
			required: false,
		},
		refreshToken: {
			type: String,
			required: false,
		},
		wishlist: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
			},
		],
		cart: [
			{
				quantity: {
					type: Number,
					default: 1,
				},
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

userSchema.statics.checkIfExistingUser = async function (email) {
	const user = await this.findOne({ email });
	if (user) {
		return true;
	}

	return false;
};

userSchema.methods.verifyPassword = async function (password) {
	const user = this;
	return await bcrypt.compare(password, user.password);
};

userSchema.methods.generateAuthTokens = async function (
	accessTokenExpiry,
	refreshTokenExpiry
) {
	const user = this;

	const accessToken = generateToken(user._id, user.email, accessTokenExpiry);
	const refreshToken = generateToken(user._id, user.email, refreshTokenExpiry);

	user.accessToken = accessToken;
	user.refreshToken = refreshToken;

	redisClient.set(accessToken, user._id.toString(), "EX", accessTokenExpiry);
	redisClient.set(refreshToken, user._id.toString(), "EX", refreshTokenExpiry);

	await user.save();
	return [accessToken, refreshToken];
};

userSchema.pre("save", async function (next) {
	const user = this;
	if (user.isModified("password")) {
		user.password = await bcrypt.hash(user.password, 10);
	}
	next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
