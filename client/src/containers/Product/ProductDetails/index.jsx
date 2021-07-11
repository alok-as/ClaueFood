import React from "react";
import { useDispatch } from "react-redux";

import classes from "./index.module.scss";
import { ProductContent, ProductSlider } from "../../../components/Product";
import { addProductToCart } from "../../../redux/Cart/actions";
import { Row } from "../../../hoc";

import Image1 from "../../../assets/images/home/product-1.jpg";
import Image2 from "../../../assets/images/home/product-2.jpg";

const images = [
	{
		key: 1,
		url: Image1,
	},
	{
		key: 2,
		url: Image2,
	},
];

const ProductDetails = () => {
	const dispatch = useDispatch();

	const addProductToCartHandler = (productId) => {
		dispatch(addProductToCart(productId));
	};

	return (
		<section className={classes.details}>
			<Row className={classes.details__content}>
				<ProductSlider images={images} />
				<ProductContent addProductToCart={addProductToCartHandler} />
			</Row>
		</section>
	);
};

export default ProductDetails;
