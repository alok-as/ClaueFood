import React from "react";
import classes from "./index.module.scss";

const ProductSlide = ({ url }) => {
	return (
		<div className={classes.product__slide}>
			<img className={classes.product__image} src={url} alt="Product" />
		</div>
	);
};

export default ProductSlide;
