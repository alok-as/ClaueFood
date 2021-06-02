import React from "react";
import classes from "./index.module.scss";

import { Card } from "../../UI";
import { combineClasses } from "../../../utils";

const ProductBanner = ({ cards, className }) => {
	const finalClasses = [classes.banner];

	if (className) {
		finalClasses.push(className);
	}

	return (
		<div className={combineClasses(finalClasses)}>
			{cards.map((card) => (
				<Card {...card} />
			))}
		</div>
	);
};

export default ProductBanner;
