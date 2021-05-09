import React, { Fragment } from "react";
import { Heading } from "../index";
import classes from "./index.module.scss";

const SectionTitle = ({ children, subheading }) => {
	return (
		<Fragment>
			<Heading className={classes.section__heading} type="tertiary">
				{children}
			</Heading>
			{subheading && (
				<p className={classes.section__subheading}>{subheading}</p>
			)}
		</Fragment>
	);
};

export default SectionTitle;
