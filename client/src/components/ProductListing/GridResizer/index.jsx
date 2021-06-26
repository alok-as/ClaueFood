import React, { useState } from "react";
import { nanoid } from "nanoid";
import classes from "./index.module.scss";

const GridResizer = ({ setProductsPerColumn }) => {
	const [items, setItems] = useState([
		{
			key: nanoid(),
			count: 2,
		},
		{
			key: nanoid(),
			count: 3,
		},
		{
			key: nanoid(),
			count: 4,
		},
		{
			key: nanoid(),
			count: 5,
		},
	]);

	const resizeCards = items.map((item) => {
		const blocks = [];

		for (let i = 1; i <= item.count; i++) {
			blocks.push(
				<span key={nanoid()} className={classes.resizer__block}></span>
			);
		}

		return (
			<li
				className={classes.resizer__item}
				onClick={() => setProductsPerColumn(item.count)}
				key={item.key}
			>
				{blocks}
			</li>
		);
	});

	return (
		<div className={classes.resizer}>
			<ul className={classes.resizer__list}>{resizeCards}</ul>
		</div>
	);
};

export default GridResizer;
