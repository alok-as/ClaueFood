import React, { useState } from "react";
import { combineClasses } from "../../../utils";
import classes from "./index.module.scss";

const CategoryDropdown = ({ title, categories }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropDownHandler = () => {
		setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen);
	};

	let finaldropdownClasses = [classes.dropdown__options];

	if (isDropdownOpen) {
		finaldropdownClasses = [classes.dropdown__options, classes.dropdown__open];
	}

	return (
		<div className={classes.dropdown}>
			<div className={classes.dropdown__title} onClick={toggleDropDownHandler}>
				{title}
			</div>
			<div className={combineClasses(finaldropdownClasses)}>
				<ul className={classes.dropdown__list}>
					{categories.map((category) => (
						<li key={category.key} className={classes.dropdown__item}>
							{category.title}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CategoryDropdown;
