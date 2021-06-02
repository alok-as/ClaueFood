import React from "react";
import classes from "./index.module.scss";
import { Heading, Link } from "../../UI";

const DisplayPanel = ({ title, links }) => {
	return (
		<div className={classes.panel}>
			<Heading type="tertiary" className={classes.panel__title}>
				{title}
			</Heading>
			<ul className={classes.panel__list}>
				{links.map((link) => (
					<Link
						{...link}
						itemClass={classes.panel__item}
						linkClass={classes.panel__link}
					/>
				))}
			</ul>
			<Link to="/" linkClass={classes.panel__button}>
				All Category
			</Link>
		</div>
	);
};

export default DisplayPanel;
