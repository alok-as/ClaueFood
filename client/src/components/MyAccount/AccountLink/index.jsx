import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./index.module.scss";

const AccountLink = ({ to, children }) => {
	return (
		<li className={classes.account__item}>
			<NavLink
				to={to}
				className={classes.account__link}
				activeClassName={classes.account__active}
			>
				{children}
			</NavLink>
		</li>
	);
};

export default AccountLink;
