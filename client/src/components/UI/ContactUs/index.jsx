import React from "react";
import classes from "./index.module.scss";

const ContactUs = () => {
	return (
		<ul className={classes.contact}>
			<li className={classes.contact__address}>
				184 Main Rd E, St Albans VIC 3021, Australia
			</li>
			<li className={classes.contact__email}>contact@company.com</li>
			<li className={classes.contact__phone}> +001 2233 456</li>
		</ul>
	);
};

export default ContactUs;
