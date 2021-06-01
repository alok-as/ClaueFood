import React from "react";
import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

const FeaturedTab = ({ isActive, children, onClick }) => {
	let finalClasses;

	if (isActive) {
		finalClasses = [classes.tab, classes.tab__active];
	} else {
		finalClasses = [classes.tab];
	}

	return (
		<li className={combineClasses(finalClasses)} onClick={onClick}>
			{children}
		</li>
	);
};

export default FeaturedTab;
