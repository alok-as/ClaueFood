import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from "./index.module.scss";

const Quantity = ({ qty, stock }) => {
	const [quantity, setQuantity] = useState(qty);

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
			<p
				className={classes.quantity__dec}
				onClick={() => changeQuantityHandler("decrement")}
			>
				-
			</p>
			<p className={classes.quantity__count}>{quantity}</p>
			<p
				className={classes.quantity__inc}
				onClick={() => changeQuantityHandler("increment")}
			>
				+
			</p>
		</div>
	);
};

Quantity.defaultProps = {
	qty: 0,
};

Quantity.propTypes = {
	qty: PropTypes.number,
	stock: PropTypes.number.isRequired,
};

export default Quantity;
