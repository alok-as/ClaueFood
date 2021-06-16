import React, { useState } from "react";
import classes from "./index.module.scss";

const Quantity = ({ stock }) => {
	const [quantity, setQuantity] = useState(0);

	const changeQuantityHandler = (type) => {
		if (type.includes("increment")) {
			setQuantity((quantity) => {
				if (quantity < stock) {
					return quantity + 1;
				}
				return quantity;
			});
		} else {
			setQuantity((quantity) => {
				if (quantity > 0) {
					return quantity - 1;
				}
				return quantity;
			});
		}
	};

	return (
		<div className={classes.quantity}>
			<p onClick={() => changeQuantityHandler("decrement")}>-</p>
			<p className={classes.quantity__count}>{quantity}</p>
			<p onClick={() => changeQuantityHandler("increment")}>+</p>
		</div>
	);
};

export default Quantity;
