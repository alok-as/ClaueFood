import React from "react";
import classes from "./index.module.scss";

import logoImage from "../../../assets/images/common/logo.png";

const Logo = () => {
	return (
		<div className={classes.logo}>
			<img src={logoImage} alt="Claue Green" />
		</div>
	);
};

export default Logo;
