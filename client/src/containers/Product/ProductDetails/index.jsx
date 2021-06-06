import React from "react";

import classes from "./index.module.scss";
import { ProductContent, ProductSlider } from "../../../components/Product";
import { Row } from "../../../hoc";

import Image1 from "../../../assets/images/home/product-1.jpg";
import Image2 from "../../../assets/images/home/product-2.jpg";

const images = [
	{
		id: 1,
		url: Image1,
	},
	{
		id: 2,
		url: Image2,
	},
];

const ProductDetails = () => {
	return (
		<section className={classes.details}>
			<Row className={classes.details__content}>
				<ProductSlider images={images} />
				<ProductContent />
			</Row>
		</section>
	);
};

export default ProductDetails;
