import React, { useState } from "react";
import classes from "./index.module.scss";
import { Button } from "../index";

const ProductCard = ({
	title,
	image1,
	image2,
	actualPrice,
	discountedPrice,
}) => {
	const [imageSrc, setImageSrc] = useState(image1);

	const onMouseEnterHandler = () => {
		setImageSrc(image2);
	};

	const onMouseLeaveHandler = () => {
		setImageSrc(image1);
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
				<del className={classes.product__price}>{actualPrice}</del>
				<span className={classes.product__discount}>{discountedPrice}</span>
				<Button className={classes.product__button}>Add to Cart</Button>
			</div>
		</div>
	);
};

export default ProductCard;
