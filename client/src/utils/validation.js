const regularExpression = {
	name: /[a-zA-z]{3,}/,
	email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
	password: /^[A-Za-z]\w{8,}$/,
};

const errorMessages = {
	name: "Name should be atleast 2 charactes, only letters allowed",
	email: "Enter a valid email address",
	password:
		"Password must be atleast 8 characters long, only letters numbers allowed",
};

export const checkInputValidation = (field, value) => {
	console.log("Checkinig field", field);
	const regEx = regularExpression[field];
	const result = regEx.test(value) ? "" : errorMessages[field];
	return result;
};
