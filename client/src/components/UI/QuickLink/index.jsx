import React from "react";
import PropTypes from "prop-types";

import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import { combineClasses } from "../../../utils";

const QuickLink = ({ type, to, children, itemClass, linkClass }) => {
	const finalLinkClasses = [classes.quick__link];

	if (linkClass) {
		finalLinkClasses.push(linkClass);
	}

	if (type === "li") {
		return (
			<li className={itemClass}>
				<Link to={to} className={combineClasses(finalLinkClasses)}>
					{children}
				</Link>
			</li>
		);
	} else {
		return (
			<p className={itemClass}>
				<Link to={to} className={combineClasses(finalLinkClasses)}>
					{children}
				</Link>
			</p>
		);
	}
};

QuickLink.defaultProps = {
	children: "Link Title Required",
	type: "li",
};

QuickLink.propTypes = {
	to: PropTypes.string.isRequired,
	type: PropTypes.string,
	children: PropTypes.string.isRequired,
	itemClass: PropTypes.string,
	linkClass: PropTypes.string,
};

export default QuickLink;
