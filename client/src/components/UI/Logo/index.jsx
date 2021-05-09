import React from "react";
import classes from "./index.module.scss";

import logoImage from "../../../assets/images/common/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<div className={classes.logo}>
			<Link to="/" exact>
				<img src={logoImage} alt="Claue Green" />
			</Link>
		</div>
	);
};

export default Logo;
