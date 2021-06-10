import React, { useState } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Alert, Button, Input, Loader } from "../../UI";
import { checkInputValidation } from "../../../utils/validation";

const SignIn = ({ loginUser, fetchUserData }) => {
	const onInputChangeHandler = (e) => {
		setFields((fields) => {
			const newFields = { ...fields };
			newFields[e.target.name].value = e.target.value;
			return newFields;
		});
	};

	const [fields, setFields] = useState({
		email: {
			key: nanoid(),
			name: "email",
			type: "email",
			label: "Email",
			validate: "email",
			value: "",
			error: "",
			required: true,
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
			required: true,
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

		setFields(newFields);

		for (let key in newFields) {
			if (newFields[key].error) {
				return false;
			}
		}

		return true;
	};

	const loginUserHandler = (e) => {
		e.preventDefault();

		if (!checkInputValidationHandler()) {
			return;
		}

		const { email, password } = fields;
		const userData = {
			email: email.value,
			password: password.value,
		};

		loginUser(userData);
	};

	const resetFormDataHandler = () => {
		const newFields = { ...fields };

		Object.values(newFields).forEach((value) => {
			value.value = "";
			value.error = "";
		});

		setFields(newFields);
	};

	const fieldsArr = Object.values(fields);

	return (
		<div className={classes.signin}>
			<form className={classes.signin__form} onSubmit={loginUserHandler}>
				<p className={classes.signin__title}>Registered Customers</p>
				{fieldsArr.map((field) => (
					<Input {...field} className={classes.signup__field} />
				))}
				<div className={classes.signin__options}>
					<Button rounded={false} className={classes.signin__button}>
						Login
					</Button>
					<button className={classes.signin__forgot}>
						Forgot your password?
					</button>
				</div>
			</form>
			<div className={classes.signin__oauth}>
				<p className={classes.signin__title}>Or Sign in with</p>
				<Button
					rounded={false}
					className={classes.signin__button}
					onClick={fetchUserData}
				>
					FetchUserData
				</Button>
			</div>
		</div>
	);
};

export default SignIn;
