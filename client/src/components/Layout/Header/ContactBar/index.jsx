import React from "react";
import { Row } from "../../../../hoc";
import classes from "./index.module.scss";

const ContactBar = () => {
	return (
		<div className={classes.contact}>
			<Row className={classes.contact__content}>
				<div className={classes.contact__left}>
					<p className={classes.contact__item} href="/0">
						+01 23456789
					</p>
					<p className={classes.contact__item} href="/0">
						claue@domain.com
					</p>
					<p className={classes.contact__item}>Track your order</p>
					<p className={classes.contact__item}>Store Locator</p>
				</div>

				<div className={classes.contact__right}>
					<p className={classes.contact__item}>English</p>
				</div>
			</Row>
		</div>
	);
};

export default ContactBar;
