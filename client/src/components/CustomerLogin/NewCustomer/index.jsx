import React from "react";
import classes from "./index.module.scss";
import { Button, Heading } from "../../UI";

const NewCustomer = () => {
	return (
		<div className={classes.customer__new}>
			<Heading type="quaternary" className={classes.customer__heading}>
				New Customers
			</Heading>
			<p className={classes.customer__text}>
				By creating an account with our store, you will be able to move through
				the checkout process faster, store multiple shipping addresses, view and
				track your orders in your account and more.
			</p>
			<Button color="green" className={classes.customer__button}>
				Create an Account
			</Button>
		</div>
	);
};

export default NewCustomer;
