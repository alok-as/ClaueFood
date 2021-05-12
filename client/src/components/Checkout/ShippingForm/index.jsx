import React from "react";
import classes from "./index.module.scss";

const ShippingForm = ({ switchToStep }) => {
	return (
		<form className={classes.shipping__form}>
			<p>Shipping Form</p>
			<button onClick={switchToStep}>Next</button>
		</form>
	);
};

export default ShippingForm;
