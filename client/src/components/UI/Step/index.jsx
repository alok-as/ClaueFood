import React from "react";
import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

const Step = ({ children, active, disabled, completed, index }) => {
	let finalNumberClasses = [classes.step__number];

	if (active) {
		finalNumberClasses = [classes.step__number, classes.step__active];
	}

	if (completed) {
		finalNumberClasses = [classes.step__number, classes.step__completed];
	}

	if (disabled) {
		finalNumberClasses = [classes.step__number, classes.step__disabled];
	}

	return (
		<div className={classes.step}>
			<div className={classes.step__top}>
				<span className={combineClasses(finalNumberClasses)}>{index + 1}</span>
			</div>
			<p className={classes.step__title}>{children}</p>
		</div>
	);
};

export default Step;
