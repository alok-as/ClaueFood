import React from "react";
import classes from "./index.module.scss";
import Icons from "../../../utils/icons";

const Icon = ({ iconName, iconClass, onClick }) => {
	const finalClass = [classes.icon];
	const { viewBox, path } = Icons[iconName];

	if (iconClass) {
		finalClass.push(iconClass);
	}

	return (
		<svg className={finalClass.join(" ")} viewBox={viewBox} onClick={onClick}>
			{path}
		</svg>
	);
};

export default Icon;
