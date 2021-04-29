const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const { isEmail, isMobilePhone } = require("validator");
const { privateKey } = require("../../config/keys");

const userSchema = new mongoose.Schema({
	name: {
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
		required: true,
		validate: {
			validator: (value) => isMobilePhone(value, "en-IN"),
			message: ({ value }) => `${value} is not a valid mobile number`,
		},
		trim: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
	authToken: {
		type: String,
		required: false,
	},
});

userSchema.statics.checkIfExistingUser = async (email) => {
	const user = await User.findOne({ email });
	if (user) {
		return true;
	}

	return false;
};

userSchema.methods.verifyPassword = async function (password) {
	const user = this;
	return await bcrypt.compare(password, user.password);
};

userSchema.methods.generateAuthToken = async function () {
	const user = this;
	const authToken = jwt.sign({ _id: user._id, email: user.email }, privateKey, {
		algorithm: "RS256",
	});

	user.authToken = authToken;
	await user.save();

	return authToken;
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
