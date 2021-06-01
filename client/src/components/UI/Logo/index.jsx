import React from "react";
import { Link } from "react-router-dom";

import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

import logoImage from "../../../assets/images/common/logo.png";
import logoImage2 from "../../../assets/images/common/logo-2.png";

const Logo = ({ type, className }) => {
	const finalClasses = [classes.logo];

	if (className) {
		finalClasses.push(className);
	}

	return (
		<div className={combineClasses(finalClasses)}>
			<Link to="/">
				<img src={type === 1 ? logoImage : logoImage2} alt="Claue Green" />
			</Link>
		</div>
	);
};

Logo.defaultProps = {
	type: 1,
};

export default Logo;
