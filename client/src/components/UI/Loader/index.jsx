import React from "react";
import classes from "./index.module.scss";

const Loader = () => {
	return (
		<div className={classes.loader__wrapper}>
			<div className={classes.loader__spinner}></div>
		</div>
	);
};

export default Loader;
