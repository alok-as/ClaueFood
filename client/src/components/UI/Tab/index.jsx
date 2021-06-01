import React from "react";
import { combineClasses } from "../../../utils";
import classes from "./index.module.scss";

const Tab = ({ children, isActive, onClick }) => {
	const finalClasses = [classes.tab];

	if (isActive) {
		finalClasses.push(classes.tab__active);
	}

	return (
		<button className={combineClasses(finalClasses)} onClick={onClick}>
			{children}
		</button>
	);
};

export default Tab;
