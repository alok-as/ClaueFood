import React from "react";
import classes from "./index.module.scss";

const Alert = ({ type, children }) => {
	const finalClass = [classes.alert];

	switch (type) {
		case "success":
			finalClass.push(classes.alert__success);
			break;
		case "failure":
			finalClass.push(classes.alert__failure);
			break;
		case "warning":
			finalClass.push(classes.alert__warning);
			break;
		default:
			finalClass.push(classes.alert__success);
	}

	return <div className={finalClass.join(" ")}>{children}</div>;
};

export default Alert;
