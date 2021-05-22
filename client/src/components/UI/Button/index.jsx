import React, { memo } from "react";
import classes from "./index.module.scss";
import PropTypes from "prop-types";

const Button = ({ onClick, color, children, className }) => {
	const finalClass = [classes.button];

	if (color === "green") {
		finalClass.push(classes.button__green);
	} else if (color === "white") {
		finalClass.push(classes.button__white);
	} else {
		finalClass.push(classes.button__black);
	}

	if (className) {
		finalClass.push(className);
	}

	return (
		<button className={finalClass.join(" ")} onClick={onClick}>
			{children}
		</button>
	);
};

Button.defaultProps = {
	children: "Button",
	color: "black",
};

Button.propTypes = {
	color: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.string,
	className: PropTypes.string,
};

export default memo(Button);
