import React, { useEffect, useState } from "react";

import classes from "./index.module.scss";
import { Quantity } from "../index";
import productImage from "../../../assets/images/home/product-1.jpg";

const MiniCartItem = ({
	_id,
	quantity,
	title,
	price,
	stock,
	discountedPrice,
	removeProductFromCart,
}) => {
	const [totalPrice, setTotalPrice] = useState(0);

	const calculatedFinalPriceHandler = () => {
		console.log("Checking Values ", discountedPrice, quantity);
		const totalPrice = discountedPrice
			? discountedPrice * quantity
			: price * quantity;

		setTotalPrice(totalPrice.toFixed(2));
	};

	useEffect(() => {
		calculatedFinalPriceHandler();
	}, []);

	const removeProductFromCartHandler = () => {
		removeProductFromCart(_id, price, discountedPrice);
	};

	return (
		<li className={classes.item}>
			<div className={classes.item__image}>
				<img src={productImage} alt={title} />
				<div className={classes.item__overlay}>
					<p onClick={removeProductFromCartHandler}>Delete</p>
				</div>
			</div>
			<div className={classes.item__info}>
				<p className={classes.item__title}>{title}</p>
				<p className={classes.item__price}>${totalPrice}</p>
				<Quantity qty={quantity} stock={stock} />
			</div>
		</li>
	);
};

export default MiniCartItem;
