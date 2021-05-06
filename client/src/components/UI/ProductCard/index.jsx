import React, { useState } from "react";
import classes from "./index.module.scss";
import { Button } from "../index";

import imagePrimary from "../../../assets/images/Home/product-1.jpg";
import imageSecondary from "../../../assets/images/Home/product-2.jpg";

const ProductCard = ({ title, images, price, discountedPrice }) => {
	// const imagePrimary = images.find((image) => Boolean(image.isPrimary)).url;
	// const imageSecondary = images.find((image) => !Boolean(image.isPrimary)).url;
	const [imageSrc, setImageSrc] = useState(imagePrimary);

	const onMouseEnterHandler = () => {
		setImageSrc(imageSecondary);
	};

	const onMouseLeaveHandler = () => {
		setImageSrc(imagePrimary);
	};

	return (
		<div className={classes.product}>
			<div
				className={classes.product__image}
				onMouseEnter={onMouseEnterHandler}
				onMouseLeave={onMouseLeaveHandler}
			>
				<img src={imageSrc} alt={title} />
				<p className={classes.product__sale}>Sale</p>
			</div>
			<div className={classes.product__content}>
				<p className={classes.product__title}>{title}</p>
				<del className={classes.product__price}>${price.toFixed(2)}</del>
				<span className={classes.product__discount}>
					{discountedPrice && `$${discountedPrice.toFixed(2)}`}
				</span>
				<br />
				<Button className={classes.product__button}>Add to Cart</Button>
			</div>
		</div>
	);
};

export default ProductCard;
