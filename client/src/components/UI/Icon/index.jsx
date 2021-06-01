import React from "react";
import classes from "./index.module.scss";
import Icons from "../../../utils/icons";
import { combineClasses } from "../../../utils";

const Icon = ({ iconName, iconClass, onClick }) => {
	const finalClasses = [classes.icon];
	const { viewBox, path } = Icons[iconName];

	if (iconClass) {
		finalClasses.push(iconClass);
	}

	return (
		<svg
			className={combineClasses(finalClasses)}
			viewBox={viewBox}
			onClick={onClick}
		>
			{path}
		</svg>
	);
};

export default Icon;
