import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./index.module.scss";

const NavigationItem = ({ to, children }) => {
	return (
		<li className={classes.navigation__item}>
			<NavLink to={to} className={classes.navigation__link}>
				{children}
			</NavLink>
		</li>
	);
};

export default NavigationItem;
