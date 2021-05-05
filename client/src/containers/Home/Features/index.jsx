import React, { Fragment } from "react";
import classes from "./index.module.scss";
import { Feature } from "../../../components/UI";

const Features = ({ icon, title, children }) => {
	return (
		<Fragment>
			<div className={classes.feature__left}>
				<img src={icon} alt="" />
			</div>
			<div className={classes.feature__right}>
				<p>{title}</p>
				<p>{children}</p>
			</div>
		</Fragment>
	);
};

export default Features;
