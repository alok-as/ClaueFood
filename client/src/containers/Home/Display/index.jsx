import React from "react";
import { useDispatch } from "react-redux";

import classes from "./index.module.scss";
import { DisplayPanel, ProductBanner, Slider } from "../../../components/Home";
import { Section } from "../../../components/UI";

import { addProductToCart } from "../../../redux/Cart/actions";
import sampleData from "../../../data/data";

const Display = ({ className, cards, title, links }) => {
	const dispatch = useDispatch();

	const addProductToCartHandler = (productId, modalData) => {
		dispatch(addProductToCart(productId, modalData));
	};

	return (
		<Section>
			<ProductBanner className={className} cards={cards} />
			<div className={classes.display__container}>
				<DisplayPanel title={title} links={links} />
				<div className={classes.display__slider}>
					<Slider
						data={sampleData}
						numSlides={4}
						addProductToCart={addProductToCartHandler}
					/>
				</div>
			</div>
		</Section>
	);
};

export default Display;
