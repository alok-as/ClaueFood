import React, { useState } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { useSelect } from "../../../hooks";
import { Portal } from "../../../hoc";
import { FilterBar } from "../index";

const Toolbar = () => {
	const [isFilterBarVisibile, setIsFilterBarVisibile] = useState(false);
	const [perPageOptions, setPerPageOptions] = useState([
		{ key: nanoid(), value: "Show 24 per page" },
		{ key: nanoid(), value: "Show 32 per page" },
		{ key: nanoid(), value: "Show 40 per page" },
	]);
	const [sortByOptions, setsortByOptions] = useState([
		{ key: nanoid(), value: "Sort By Position" },
		{ key: nanoid(), value: "Sort By ProductName" },
		{ key: nanoid(), value: "Sort By Price" },
		{ key: nanoid(), value: "Sort By Bestseller" },
		{ key: nanoid(), value: "Sort By Featured" },
		{ key: nanoid(), value: "Sort By Special" },
		{ key: nanoid(), value: "Sort By Latest" },
	]);

	const [perPageValue, PerPageDropdown] = useSelect(perPageOptions);
	const [sortByValue, sortByDropdown] = useSelect(sortByOptions);

	const openFilterBarHandler = () => {
		setIsFilterBarVisibile(true);
	};

	const closeFilterBarHandler = () => {
		setIsFilterBarVisibile(false);
	};

	return (
		<div className={classes.toolbar}>
			<Portal>
				<FilterBar
					isVisible={isFilterBarVisibile}
					onClose={closeFilterBarHandler}
				/>
			</Portal>
			<div className={classes.toolbar__filter} onClick={openFilterBarHandler}>
				Filter
			</div>
			<div className={classes.toolbar__views}>Views</div>
			<div className={classes.toolbar__limiter}>{PerPageDropdown}</div>
			<div className={classes.toolbar__order}>{sortByDropdown}</div>
		</div>
	);
};

export default Toolbar;
