import React from "react";
import classes from "./index.module.scss";

const Row = ({ children, className }) => {
	const finalClass = [classes.row];

	if (className) {
		finalClass.push(className);
	}

	return <div className={finalClass.join(" ")}>{children}</div>;
};

export default Row;
