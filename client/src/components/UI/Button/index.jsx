import React, { memo } from "react";
import classes from "./index.module.scss";
import PropTypes from "prop-types";

const Button = ({ onClick, children, className }) => {
	const finalClass = [classes.button];
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
};

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.string,
	className: PropTypes.string,
};

export default memo(Button);
