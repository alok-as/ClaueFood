import { createElement } from "react";
import classes from "./index.module.scss";
import PropTypes from "prop-types";

const Heading = ({ type, children, textTransform, color, className }) => {
	let element;

	const style = {
		textTransform,
		color,
	};

	let finalClass = [classes[`heading__${type}`]];

	switch (type) {
		case "primary":
			element = "h1";
			break;
		case "secondary":
			element = "h2";
			break;
		case "tertiary":
			element = "h3";
			break;
		case "quaternary":
			element = "h4";
			break;
		case "pentanary":
			element = "h5";
			break;
		case "hexanary":
			element = "h6";
			break;
		default:
			element = "h4";
	}

	if (className) {
		finalClass.push(className);
	}

	return createElement(
		element,
		{ className: finalClass.join(" "), style },
		children
	);
};

Heading.defaultProps = {
	children: `Heading Required`,
};

Heading.propTypes = {
	color: PropTypes.string,
	textTransform: PropTypes.string,
	type: PropTypes.oneOf([
		"primary",
		"secondary",
		"tertiary",
		"quaternary",
		"pentanary",
		"hexanary",
	]).isRequired,
};

export default Heading;
