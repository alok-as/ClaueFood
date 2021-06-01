import React from "react";
import classes from "./index.module.scss";

const FooterList = ({ listTitle, listData }) => {
	return (
		<div className={classes.list}>
			<p className={classes.list__title}>{listTitle}</p>
			<ul className={classes.list__items}>
				{listData.map((item) => (
					<li className={classes.list__item}>{item.children}</li>
				))}
			</ul>
		</div>
	);
};

export default FooterList;
