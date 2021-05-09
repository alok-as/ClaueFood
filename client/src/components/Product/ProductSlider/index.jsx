import React from "react";
import classes from "./index.module.scss";
import { ProductSlide } from "../index";

const Slider = ({ images }) => {
	return (
		<div className={classes.slider}>
			{images.map((image) => (
				<ProductSlide />
			))}
		</div>
	);
};

export default Slider;
