import React from "react";
import classes from "./index.module.scss";
import { ProductCard } from "../../../components/UI";
import { combineClasses } from "../../../utils";

const ProductGrid = ({ products, productsPerColumn }) => {
	let finalClasses = [
		classes.grid,
		classes[`grid__column${productsPerColumn}`],
	];

	return (
		<div className={combineClasses(finalClasses)}>
			{products.map((product) => (
				<ProductCard {...product} />
			))}
		</div>
	);
};

export default ProductGrid;
