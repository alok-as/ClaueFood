import React from "react";
import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

const FeaturedItem = ({ isActive, children, onClick }) => {
	let finalClasses;

	if (isActive) {
		finalClasses = [classes.item, classes.item__active];
	} else {
		finalClasses = [classes.item];
	}

	return (
		<li className={combineClasses(finalClasses)} onClick={onClick}>
			{children}
		</li>
	);
};

export default FeaturedItem;
