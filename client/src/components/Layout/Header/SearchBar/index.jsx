import React, { useState } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Row } from "../../../../hoc";
import { CategoryDropdown } from "../../../UI";

const SearchBar = () => {
	const [categories, setCategories] = useState([
		{
			key: nanoid(),
			title: "Value of the day",
			tag: "new",
		},
		{
			key: nanoid(),
			title: "New arrivals",
		},
		{
			key: nanoid(),
			title: "Vegetables",
		},
		{
			key: nanoid(),
			title: "Beans & peas",
		},
		{
			key: nanoid(),
			title: "Orange Vegetables",
		},
		{
			key: nanoid(),
			title: "Dark Green",
		},
		{
			key: nanoid(),
			title: "Juice",
			tag: "sale",
		},
		{
			key: nanoid(),
			title: "Starchy Vegetables",
		},
		{
			key: nanoid(),
			title: "Peaches Fruit ",
		},
		{
			key: nanoid(),
			title: "Apple Fruit ",
		},
		{
			key: nanoid(),
			title: "Fresh ChestNut",
			tag: "hot",
		},
	]);

	return (
		<div className={classes.search}>
			<Row className={classes.search__content}>
				<CategoryDropdown title="Departments" categories={categories} />
				<div className={classes.search__field}>
					<form className={classes.search__form}>
						<input
							type="search"
							placeholder="Search for..."
							className={classes.search__input}
						/>
					</form>
				</div>
				<div className={classes.search__offer}>
					Use code <mark className={classes.search__occation}>"covid19"</mark>
					for
					<mark className={classes.search__discount}>15%</mark>off!
				</div>
			</Row>
		</div>
	);
};

export default SearchBar;
