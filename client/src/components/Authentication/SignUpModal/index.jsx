import React, { useState, useEffect, Fragment, useRef } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Alert, Input, Loader } from "../../UI";
import { checkInputValidation } from "../../../utils/validation";

const SignUpModal = ({
	registerDetails,
	registerUser,
	clearRegisterMetaData,
	closeModal,
}) => {
	const checkboxRef = useRef();
	const { isLoading, isSuccess, message } = registerDetails;

	const onInputChangeHandler = (e) => {
		const newFields = { ...fields };

		newFields[e.target.name].value = e.target.value;
		setFields(newFields);
	};

	const [fields, setFields] = useState({
		firstName: {
			key: nanoid(),
			name: "firstName",
			type: "text",
			placeholder: "first name",
			validate: "name",
			value: "",
			error: "",
			onChange: onInputChangeHandler,
		},
		lastName: {
			key: nanoid(),
			name: "lastName",
			type: "text",
			placeholder: "last name",
			value: "",
			validate: "name",
			error: "",
			onChange: onInputChangeHandler,
		},
		email: {
			key: nanoid(),
			name: "email",
			type: "email",
			label: "Email",
			validate: "email",
			value: "",
			error: "",
			onChange: onInputChangeHandler,
		},
		password: {
			key: nanoid(),
			name: "password",
			type: "password",
			label: "Password",
			validate: "password",
			placeholder: "",
			value: "",
			error: "",
			onChange: onInputChangeHandler,
		},
		confirmPassword: {
			key: nanoid(),
			name: "confirmPassword",
			type: "password",
			label: "Confirm Password",
			validate: "password",
			placeholder: "",
			value: "",
			error: "",
			onChange: onInputChangeHandler,
		},
	});

	const checkInputValidationHandler = () => {
		const newFields = { ...fields };

		for (let key in newFields) {
			newFields[key].error = checkInputValidation(
				newFields[key].validate,
				newFields[key].value
			);
		}

		if (newFields.password.value !== newFields.confirmPassword.value) {
			newFields.password.error = "Passwords doesn't match";
			newFields.confirmPassword.error = "Passwords doesn't match";
			setFields(newFields);
			return false;
		}

		setFields(newFields);

		for (let key in newFields) {
			if (newFields[key].error) {
				return false;
			}
		}

		if (!checkboxRef.current.checked) {
			return false;
		}

		return true;
	};

	const registerUserHandler = (e) => {
		e.preventDefault();

		if (!checkInputValidationHandler()) {
			return;
		}

		const { firstName, lastName, email, password } = fields;
		const userData = {
			firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			password: password.value,
		};

		registerUser(userData);
	};

	const resetFormDataHandler = () => {
		const newFields = { ...fields };
		fields.forEach((field) => {
			field.value = "";
			field.error = "";
		});

		setFields(newFields);
	};

	useEffect(() => {
		if (isLoading === false) {
			resetFormDataHandler();
		}
	}, [isLoading]);

	useEffect(() => {
		if (isSuccess) {
			setTimeout(() => {
				closeModal();
				clearRegisterMetaData();
			}, 1200);
		}
	}, [isSuccess, closeModal, clearRegisterMetaData]);

	let alertMessage = null;

	if (isSuccess !== undefined) {
		alertMessage = (
			<Alert type={isSuccess ? "success" : "failure"}>{message}</Alert>
		);
	}

	const fieldsArr = Object.values(fields);

	return (
		<Fragment>
			{alertMessage}
			<form
				className={classes.signup}
				onSubmit={registerUserHandler}
				noValidate
			>
				{isLoading && <Loader />}
				<div className={classes.signup__name}>
					{fieldsArr.slice(0, 2).map((field) => (
						<Input {...field} />
					))}
				</div>

				{fieldsArr.slice(2, 5).map((field) => (
					<Input {...field} className={classes.signup__field} />
				))}

				<div className={classes.signup__terms}>
					<input type="checkbox" ref={checkboxRef} />
					<span className={classes.signup__text}>
						By using this form you agree with the storage and handling of your
						data by this website.
					</span>
				</div>

				<button className={classes.signup__button}>Create an Account</button>
			</form>
		</Fragment>
	);
};

export default SignUpModal;
