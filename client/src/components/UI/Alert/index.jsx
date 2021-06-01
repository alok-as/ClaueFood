import React from "react";
import PropTypes from "prop-types";

import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

const Alert = ({ type, children }) => {
	const finalClasses = [classes.alert];

	switch (type) {
		case "success":
			finalClasses.push(classes.alert__success);
			break;
		case "failure":
			finalClasses.push(classes.alert__failure);
			break;
		case "warning":
			finalClasses.push(classes.alert__warning);
			break;
		default:
			finalClasses.push(classes.alert__success);
	}

	return <div className={combineClasses(finalClasses)}>{children}</div>;
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
