const regularExpression = {
	name: /[a-zA-z]{3,}/,
	email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
	password: /^[A-Za-z][a-zA-z@$#!0-9]{8,}$/,
};

const errorMessages = {
	name: "Name should be atleast 2 charactes, only letters allowed",
	email: "Enter a valid email address",
	password:
		"Password must be atleast 8 characters long, only letters numbers allowed",
};

const requiredMessages = {
	name: "Name is required",
	email: "Email is required",
	password: "Password is required",
};

export const checkInputValidation = (field, value) => {
	const regEx = regularExpression[field];
	let result;

	if (value) {
		result = regEx.test(value) ? "" : errorMessages[field];
	} else {
		result = requiredMessages[field];
	}

	return result;
};
