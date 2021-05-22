import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Step } from "../index";

const Stepper = ({ pathname }) => {
	const [steps, setSteps] = useState([
		{
			key: nanoid(),
			children: "Shipping",
			active: true,
			completed: false,
			disabled: false,
		},
		{
			key: nanoid(),
			children: "Review & Payment",
			active: true,
			completed: false,
			disabled: true,
		},
	]);

	useEffect(() => {
		if (pathname.includes("shipping")) {
			const newSteps = [...steps];

			newSteps[0].active = true;
			newSteps[0].completed = false;

			newSteps[1].active = false;
			newSteps[1].disabled = true;

			setSteps(newSteps);
		} else {
			const newSteps = [...steps];
			newSteps[0].active = false;
			newSteps[0].completed = true;

			newSteps[1].active = true;
			newSteps[1].disabled = false;

			setSteps(newSteps);
		}
	}, [pathname]);

	return (
		<div className={classes.stepper}>
			{steps.map((step, index) => (
				<Step {...step} index={index} />
			))}
		</div>
	);
};

export default Stepper;
