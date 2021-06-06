import React from "react";
import classes from "./index.module.scss";
import { SectionTitle, Offerings } from "../../../components/UI";

const ProductOfferings = () => {
	return (
		<div className={classes.offerings__wrapper}>
			<div className={classes.offerings__title}>
				<SectionTitle subheading="Custom static block for product detail">
					DELIVERY &amp; RETURNS
				</SectionTitle>
			</div>
			<Offerings version={2} />
		</div>
	);
};

export default ProductOfferings;
