import React from "react";
import classes from "./index.module.scss";
import { combineClasses } from "../../utils";

const Row = ({ children, className }) => {
	const finalClasses = [classes.row];

	if (className) {
		finalClasses.push(className);
	}

	return <div className={combineClasses(finalClasses)}>{children}</div>;
};

export default Row;
