import React from "react";
import classes from "./index.module.scss";
import { QuickLink } from "../../UI";

const FooterList = ({ listTitle, listData }) => {
	return (
		<div className={classes.list}>
			<p className={classes.list__title}>{listTitle}</p>
			<ul className={classes.list__items}>
				{listData.map((item) => (
					<QuickLink
						{...item}
						itemClass={classes.list__item}
						linkClass={classes.list__link}
					/>
				))}
			</ul>
		</div>
	);
};

export default FooterList;
