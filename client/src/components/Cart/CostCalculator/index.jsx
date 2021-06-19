import React, { useState } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Input } from "../../UI";
import { combineClasses } from "../../../utils";

const CostCalculator = () => {
	const [tabs, setTabs] = useState([
		{ key: nanoid(), title: "Estimate Shipping and Tax", isActive: true },
		{ key: nanoid(), title: "Apply Discount Code", isActive: false },
	]);

	const selectTabHandler = (index) => {
		setTabs((tabs) => {
			const newTabs = [...tabs];
			newTabs.forEach((tab, i) => {
				if (i === index) {
					tab.isActive = true;
				} else {
					tab.isActive = false;
				}
			});
			return newTabs;
		});
	};

	const attachClassHandler = (isActive) => {
		if (isActive) {
			return combineClasses([
				classes.calculator__tab,
				classes.calculator__active,
			]);
		}

		return classes.calculator__tab;
	};

	return (
		<div className={classes.calculator}>
			<div className={classes.calculator__sidebar}>
				<ul className={classes.calculator__tabs}>
					{tabs.map((tab, index) => (
						<li
							key={tab.key}
							className={attachClassHandler(tab.isActive)}
							onClick={() => selectTabHandler(index)}
						>
							{tab.title}
						</li>
					))}
				</ul>
			</div>
			<div className={classes.calculator__mainbar}>
				<p className={classes.calculator__text}>
					Enter your destination to get a shipping estimate
				</p>
				<form className={classes.calculator__form}>
					<div className={classes.calculator__field}></div>
				</form>
			</div>
		</div>
	);
};

export default CostCalculator;
