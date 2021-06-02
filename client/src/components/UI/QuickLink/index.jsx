import React from "react";
import PropTypes from "prop-types";

import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import { combineClasses } from "../../../utils";

const QuickLink = ({ to, children, itemClass, linkClass }) => {
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

QuickLink.defaultProps = {
	children: "Link Title Required",
};

QuickLink.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	itemClass: PropTypes.string,
	linkClass: PropTypes.string,
};

export default QuickLink;
