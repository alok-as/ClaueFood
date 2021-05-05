import React from "react";
import classes from "./index.module.scss";

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

export default Button;
