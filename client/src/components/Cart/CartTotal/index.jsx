import React, { Fragment } from "react";
import { Button } from "../../UI";
import classes from "./index.module.scss";

const CartTotal = () => {
	return (
		<div className={classes.total}>
			<div className={classes.total__content}>
				<div className={classes.total__head}>
					<span className={classes.total__text1}>Subtotal</span>
					<span className={classes.total__text1}>$120.00</span>
				</div>
				<div className={classes.total__foot}>
					<span className={classes.total__text2}>Order total</span>
					<span className={classes.total__text2}>$120.00</span>
				</div>
			</div>
			<Button color="black" className={classes.total__checkout}>
				Proceed to Checkout
			</Button>
		</div>
	);
};

export default CartTotal;
