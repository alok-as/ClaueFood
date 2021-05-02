import React, { useState, useEffect, Fragment } from "react";
import classes from "./index.module.scss";
import { Alert, Input, Loader } from "../../UI";

const SignUpModal = ({
	registerDetails,
	registerUser,
	clearRegisterMetaData,
	closeModal,
}) => {
	const { isLoading, isSuccess, message } = registerDetails;

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const onInputChangeHandler = (e, field) => {
		const value = e.target.value;

		switch (field) {
			case "firstName":
				setFirstName(value);
				break;
			case "lastName":
				setLastName(value);
				break;
			case "email":
				setEmail(value);
				break;
			case "password":
				setPassword(value);
				break;
			case "confirmPassword":
				setConfirmPassword(value);
				break;
			default:
				return;
		}
	};

	const registerUserHandler = (e) => {
		e.preventDefault();

		const userData = {
			firstName,
			lastName,
			email,
			password,
		};

		registerUser(userData);
	};

	const resetFormDataHandler = () => {
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
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

	return (
		<Fragment>
			{alertMessage}
			<form className={classes.signup} onSubmit={registerUserHandler}>
				{isLoading && <Loader />}
				<div className={classes.signup__name}>
					<Input
						type="text"
						placeholder="first name"
						value={firstName}
						onChange={(e) => onInputChangeHandler(e, "firstName")}
					/>
					<Input
						type="text"
						placeholder="Last name"
						value={lastName}
						onChange={(e) => onInputChangeHandler(e, "lastName")}
					/>
				</div>

				<Input
					type="email"
					value={email}
					label="Email"
					className={classes.signup__field}
					onChange={(e) => onInputChangeHandler(e, "email")}
				/>

				<Input
					type="password"
					value={password}
					label="Password"
					className={classes.signup__field}
					onChange={(e) => onInputChangeHandler(e, "password")}
				/>

				<Input
					type="password"
					value={confirmPassword}
					label="Confirm Password"
					className={classes.signup__field}
					onChange={(e) => onInputChangeHandler(e, "confirmPassword")}
				/>

				<button className={classes.signup__button}>Create an Account</button>
			</form>
		</Fragment>
	);
};

export default SignUpModal;
