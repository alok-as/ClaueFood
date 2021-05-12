import React from "react";
import classes from "./index.module.scss";
import PropTypes from "prop-types";

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

Alert.defaultProps = {
	type: "failure",
	children: "Alert message missing",
};

Alert.propTypes = {
	type: PropTypes.string,
	children: PropTypes.string.isRequired,
};

export default Alert;
