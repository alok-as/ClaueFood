import React, { memo } from "react";
import classes from "./index.module.scss";
import PropTypes from "prop-types";
import { combineClasses } from "../../../utils";

const Button = ({ onClick, color, children, rounded, className }) => {
	const finalClasses = [classes.button];

	if (color === "green") {
		finalClasses.push(classes.button__green);
	} else if (color === "white") {
		finalClasses.push(classes.button__white);
	} else {
		finalClasses.push(classes.button__black);
	}

	if (rounded) {
		finalClasses.push(classes.button__rounded);
	}

	if (className) {
		finalClasses.push(className);
	}

	return (
		<button className={combineClasses(finalClasses)} onClick={onClick}>
			{children}
		</button>
	);
};

Button.defaultProps = {
	children: "Button",
	color: "black",
	rounded: true,
};

Button.propTypes = {
	color: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.string,
	className: PropTypes.string,
	rounded: PropTypes.bool,
};

export default memo(Button);
