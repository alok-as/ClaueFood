import React from "react";
import classes from "./index.module.scss";

const FeaturedItem = ({ isActive, children, onClick }) => {
	let finalClass;

	if (isActive) {
		finalClass = [classes.item, classes.item__active];
	} else {
		finalClass = [classes.item];
	}

	return (
		<li className={finalClass.join(" ")} onClick={onClick}>
			{children}
		</li>
	);
};

export default FeaturedItem;
