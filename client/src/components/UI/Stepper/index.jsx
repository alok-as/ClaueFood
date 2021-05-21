import React, { useState } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Step } from "../index";

const Stepper = () => {
	const [steps, setSteps] = useState([
		{
			key: nanoid(),
			children: "Shipping",
			active: false,
			completed: true,
			disabled: false,
		},
		{
			key: nanoid(),
			children: "Review & Payment",
			active: true,
			completed: false,
			disabled: false,
		},
	]);

	return (
		<div className={classes.stepper}>
			{steps.map((step, index) => (
				<Step {...step} index={index} />
			))}
		</div>
	);
};

export default Stepper;
