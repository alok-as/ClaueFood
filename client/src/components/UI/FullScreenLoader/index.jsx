import React, { Fragment } from "react";
import classes from "./index.module.scss";
import { Backdrop } from "../index";

const FullScreenLoader = ({ isVisible }) => {
	return (
		isVisible && (
			<Fragment>
				<Backdrop isVisible={isVisible} />
				<div className={classes.loader__wrapper}>
					<div className={classes.loader__bars}></div>
				</div>
			</Fragment>
		)
	);
};

export default FullScreenLoader;
