import React from "react";
import classes from "./index.module.scss";

import { Link } from "react-router-dom";
import { combineClasses } from "../../../utils";

const QuickLink = ({ to, children, itemClass, linkClass, color }) => {
	const finalLinkClasses = [classes.quick__link];

	if (linkClass) {
		finalLinkClasses.push(linkClass);
	}

	return (
		<li className={itemClass}>
			<Link to={to} className={combineClasses(finalLinkClasses)}>
				{children}
			</Link>
		</li>
	);
};

export default QuickLink;
