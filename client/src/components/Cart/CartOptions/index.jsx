import React from "react";
import classes from "./index.module.scss";
import { Button } from "../../UI";
import { combineClasses } from "../../../utils";

const CartOptions = () => {
	return (
		<div className={classes.cart__options}>
			<Button color="green" className={classes.cart__button}>
				Continue Shopping
			</Button>
			<Button
				color="white"
				className={combineClasses([classes.cart__button, classes.cart__update])}
			>
				Update Shopping Cart
			</Button>
			<Button color="black" className={classes.cart__button}>
				Clear Shopping Cart
			</Button>
		</div>
	);
};

export default CartOptions;
