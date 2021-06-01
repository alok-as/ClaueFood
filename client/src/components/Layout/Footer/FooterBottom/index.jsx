import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { Row } from "../../../../hoc";
import classes from "./index.module.scss";

const FooterBottom = () => {
	const [links, setLinks] = useState([
		{ key: nanoid(), children: "Blog", to: "/" },
		{ key: nanoid(), children: "Contact", to: "/" },
		{ key: nanoid(), children: "About Us", to: "/" },
		{ key: nanoid(), children: "Shop", to: "/" },
	]);

	return (
		<div className={classes.bottom}>
			<Row className={classes.bottom__content}>
				<p className={classes.bottom__copyright}>
					Copyright &copy; 2017 Claue. All rights reserved. Powered by
					Magesolution
				</p>
				<ul className={classes.bottom__list}>
					{links.map((link) => (
						<li className={classes.bottom__item}>
							<Link {...link} className={classes.bottom__link} />
						</li>
					))}
				</ul>
			</Row>
		</div>
	);
};

export default FooterBottom;
