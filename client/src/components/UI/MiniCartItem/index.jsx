import React from "react";
import classes from "./index.module.scss";
import productImage from "../../../assets/images/home/product-1.jpg";

const MiniCartItem = ({ quantity, title, price, discountedPrice }) => {
	const calculatedFinalPriceHandler = () => {
		return discountedPrice ? discountedPrice * quantity : price * quantity;
	};

	return (
		<li className={classes.item}>
			<div className={classes.item__image}>
				<img src={productImage} alt={title} />
				<div className={classes.item__overlay}></div>
			</div>
			<div className={classes.item__info}>
				<p className={classes.item__title}>{title}</p>
				<p className={classes.item__price}>
					${calculatedFinalPriceHandler().toFixed(2)}
				</p>
			</div>
		</li>
	);
};

export default MiniCartItem;
