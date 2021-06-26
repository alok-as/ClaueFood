import React, { useState, useRef } from "react";
import { nanoid } from "nanoid";
import classes from "./index.module.scss";
import { Button, Heading, Input } from "../../UI";

const ExistingCustomer = () => {
	const checkboxRef = useRef();

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
			label: "Email address",
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

	const fieldsArr = Object.values(fields);

	return (
		<div className={classes.customer__existing}>
			<Heading type="quaternary" className={classes.customer__heading}>
				Registered Customers
			</Heading>
			<em className={classes.customer__text}>
				If you have an account, sign in with your email address.
			</em>
			<form className={classes.customer__form}>
				{fieldsArr.map((field) => (
					<Input {...field} />
				))}
				<div className={classes.customer__terms}>
					<input id="terms" type="checkbox" ref={checkboxRef} />
					<label htmlFor="terms" className={classes.customer__message}>
						By using this form you agree with the storage and handling of your
						data by this website.
					</label>
				</div>
				<div className={classes.customer__cta}>
					<Button className={classes.customer__signin} rounded={false}>
						Sign In
					</Button>
					<button className={classes.customer__forgot}>
						Forgot your password?
					</button>
				</div>
			</form>
		</div>
	);
};

export default ExistingCustomer;
