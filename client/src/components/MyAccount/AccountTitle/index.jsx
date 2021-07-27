import React from "react";
import classes from "./index.module.scss";
import { Heading } from "../../../components/UI";

const AccountTitle = ({ children }) => {
	return (
		<Heading type="quaternary" className={classes.account__title}>
			{children}
		</Heading>
	);
};

export default AccountTitle;
