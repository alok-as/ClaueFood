import React, { useState } from "react";
import classes from "./index.module.scss";
import { Input } from "../../UI";

const SignUpModal = () => {
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

	return (
		<form className={classes.signup}>
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
	);
};

export default SignUpModal;
