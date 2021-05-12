import React from "react";
import classes from "./index.module.scss";

const CategoryDropdown = ({ title, categories }) => {
	return (
		<div className={classes.dropdown}>
			<div className={classes.dropdown__title}>{title}</div>
			<div className={classes.dropdown__options}>
				<ul className={classes.dropdown__list}>
					{categories.map((category) => (
						<li className={classes.dropdown__item}>{category.title}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CategoryDropdown;
