import React from "react";
import classes from "./index.module.scss";

const Step = ({ children, active, disabled, completed, index }) => {
	let finalNumberClass = [classes.step__number];

	if (active) {
		finalNumberClass = [classes.step__number, classes.step__active];
	}

	if (completed) {
		finalNumberClass = [classes.step__number, classes.step__completed];
	}

	if (disabled) {
		finalNumberClass = [classes.step__number, classes.step__disabled];
	}

	return (
		<div className={classes.step}>
			<div className={classes.step__top}>
				<span className={finalNumberClass.join(" ")}>{index + 1}</span>
			</div>
			<p className={classes.step__title}>{children}</p>
		</div>
	);
};

export default Step;
