import React from "react";
import classes from "./index.module.scss";

const NavigationItem = ({ href, children }) => {
	return (
		<li className={classes.navigation__item}>
			<a href={href} className={classes.navigation__link}>
				{children}
			</a>
		</li>
	);
};

export default NavigationItem;
