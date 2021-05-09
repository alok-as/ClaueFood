import React from "react";
import classes from "./index.module.scss";

const Tab = ({ children, isActive, onClick }) => {
	const finalClass = [classes.tab];

	if (isActive) {
		finalClass.push(classes.tab__active);
	}

	return (
		<button className={finalClass.join(" ")} onClick={onClick}>
			{children}
		</button>
	);
};

export default Tab;
