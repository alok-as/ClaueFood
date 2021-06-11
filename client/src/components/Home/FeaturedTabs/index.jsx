import React from "react";
import classes from "./index.module.scss";
import { FeaturedTab } from "../index";

const FeaturedTabs = ({ tabs, onClick }) => {
	return (
		<div className={classes.tabs}>
			<ul className={classes.tabs__list}>
				{tabs.map((tab) => (
					<FeaturedTab {...tab} onClick={() => onClick(tab.category)} />
				))}
			</ul>
		</div>
	);
};

export default FeaturedTabs;
