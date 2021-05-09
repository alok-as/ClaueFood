import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./index.module.scss";
import { Portal } from "../../../hoc";
import { ProceedModal } from "../../../containers";
import { Button } from "../index";

import imagePrimary from "../../../assets/images/Home/product-1.jpg";
import imageSecondary from "../../../assets/images/Home/product-2.jpg";

const ProductCard = ({ slug, title, images, price, discountedPrice }) => {
	// const imagePrimary = images.find((image) => Boolean(image.isPrimary)).url;
	// const imageSecondary = images.find((image) => !Boolean(image.isPrimary)).url;

	const [isProceedModalVisible, setIsProceedModalVisible] = useState(false);
	const [imageSrc, setImageSrc] = useState(imagePrimary);
	const history = useHistory();

	const onMouseEnterHandler = () => {
		setImageSrc(imageSecondary);
	};

	const onMouseLeaveHandler = () => {
		setImageSrc(imagePrimary);
	};

	const addToCartHandler = () => {
		setIsProceedModalVisible(true);
	};

	const closeProceedModalHandler = () => {
		setIsProceedModalVisible(false);
	};

	const switchToProductDetailsHandler = () => {
		history.push(`/product/${slug}`);
	};

	return (
		<div className={classes.product}>
			<Portal>
				<ProceedModal
					isVisible={isProceedModalVisible}
					imageSrc={imagePrimary}
					price={price}
					title={title}
					onClose={closeProceedModalHandler}
				/>
			</Portal>
			<div
				className={classes.product__image}
				onMouseEnter={onMouseEnterHandler}
				onMouseLeave={onMouseLeaveHandler}
				onClick={switchToProductDetailsHandler}
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
				<Button className={classes.product__button} onClick={addToCartHandler}>
					Add to Cart
				</Button>
			</div>
		</div>
	);
};

export default ProductCard;
