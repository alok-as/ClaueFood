import React from "react";
import classes from "./index.module.scss";
import { ContactUs, Logo, SocialLinks } from "../../../UI";

const Brand = () => {
	return (
		<div className={classes.brand}>
			<Logo type="2" />
			<ContactUs />
			<SocialLinks />
		</div>
	);
};

export default Brand;
