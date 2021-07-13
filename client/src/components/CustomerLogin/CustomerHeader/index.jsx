import React from "react";
import classes from "./index.module.scss";
import { OauthButton } from "../../UI";

const LoginHeader = () => {
	return (
		<div className={classes.customer__header}>
			<OauthButton type="facebook" />
			<OauthButton type="google" />
			<OauthButton type="twitter" />
		</div>
	);
};

export default LoginHeader;
