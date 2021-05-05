import React, { createElement } from "react";
import classes from "./index.module.scss";

const Heading = ({ type, children, className }) => {
	let element;
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
			element = "h7";
	}

	if (className) {
		finalClass.push(className);
	}

	return createElement(element, { className: finalClass.join(" ") }, children);
};

export default Heading;
