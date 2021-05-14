import React from "react";
import classes from "./index.module.scss";

const ShippingForm = ({ switchToPayment }) => {
	return (
		<form className={classes.shipping__form}>
			<p>Shipping Form</p>
			<button onClick={switchToPayment}>Next</button>
		</form>
	);
};

export default ShippingForm;
