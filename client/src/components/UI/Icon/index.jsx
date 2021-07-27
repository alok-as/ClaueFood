import React from "react";
import classes from "./index.module.scss";
import Icons from "../../../utils/icons";
import { combineClasses } from "../../../utils";
import { Fragment } from "react";

const Icon = ({ iconName, wrapperClass, iconClass, onClick, dropdownList }) => {
	const finalWrapperClasses = [classes.icon__wrapper];
	const finalIconClasses = [classes.icon__icon];
	const { viewBox, path } = Icons[iconName];

	if (wrapperClass) {
		finalWrapperClasses.push(wrapperClass);
	}

	if (iconClass) {
		finalIconClasses.push(iconClass);
	}

	return (
		<div className={combineClasses(finalWrapperClasses)}>
			<svg
				className={combineClasses(finalIconClasses)}
				viewBox={viewBox}
				onClick={onClick}
			>
				{path}
			</svg>
			{dropdownList.length ? (
				<ul className={classes.icon__list}>
					{dropdownList.map((item) => (
						<li
							key={item.key}
							className={classes.icon__item}
							onClick={item.onClick}
						>
							{item.title}
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

Icon.defaultProps = {
	dropdownList: [],
};

export default Icon;
