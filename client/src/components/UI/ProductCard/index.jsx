import React, { useState, memo } from "react";
import { useHistory } from "react-router-dom";
import classes from "./index.module.scss";
import { Button } from "../index";

//Testing
import imagePrimary from "../../../assets/images/home/product-1.jpg";
import imageSecondary from "../../../assets/images/home/product-2.jpg";

const ProductCard = ({
	_id,
	slug,
	title,
	images,
	price,
	discountedPrice,
	addProductToCart,
	index,
	productWidth,
}) => {
	// const imagePrimary = images.find((image) => Boolean(image.isPrimary)).url;
	// const imageSecondary = images.find((image) => !Boolean(image.isPrimary)).url;

	const [imageSrc, setImageSrc] = useState(imagePrimary);
	const history = useHistory();

	const onMouseEnterHandler = () => {
		setImageSrc(imageSecondary);
	};

	const onMouseLeaveHandler = () => {
		setImageSrc(imagePrimary);
	};

	const switchToProductDetailsHandler = () => {
		history.push(`/product/${slug}`);
	};

	const addProductToCartHandler = () => {
		addProductToCart(_id, { imageSrc, title, price });
	};

	const style = {
		width: productWidth,
	};

	return (
		<div className={classes.product}>
			<div
				className={classes.product__image}
				onMouseEnter={onMouseEnterHandler}
				onMouseLeave={onMouseLeaveHandler}
				onClick={switchToProductDetailsHandler}
			>
				<img src={imageSrc} alt={title} style={style} />
				<p className={classes.product__sale}>Sale</p>
			</div>
			<div className={classes.product__content}>
				<p className={classes.product__title}>{title}</p>
				<del className={classes.product__price}>${price.toFixed(2)}</del>
				<span className={classes.product__discount}>
					{discountedPrice && `$${discountedPrice.toFixed(2)}`}
				</span>
				<br />
				<Button
					className={classes.product__button}
					color="white"
					onClick={addProductToCartHandler}
				>
					Add to Cart
				</Button>
			</div>
		</div>
	);
};

export default memo(ProductCard);
