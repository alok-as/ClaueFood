import React from "react";
import classes from "./index.module.scss";

import { Row } from "../../../hoc";
import {
	Brand,
	FooterBottom,
	FooterLists,
	Subscribe,
} from "../../../components/Layout/Footer";

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<Row className={classes.footer__content}>
				<Brand />
				<FooterLists />
				<Subscribe />
			</Row>
			<FooterBottom />
		</footer>
	);
};

export default Footer;
