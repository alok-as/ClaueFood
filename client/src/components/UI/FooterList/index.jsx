import React from "react";
import classes from "./index.module.scss";
import { Link } from "../../UI";

const FooterList = ({ listTitle, listData }) => {
	return (
		<div className={classes.list}>
			<p className={classes.list__title}>{listTitle}</p>
			<ul className={classes.list__items}>
				{listData.map((item) => (
					<Link itemClass={classes.list__item} linkClass={classes.list__link}>
						{item.children}
					</Link>
				))}
			</ul>
		</div>
	);
};

export default FooterList;
