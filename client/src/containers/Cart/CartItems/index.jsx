import React, { useState } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Row } from "../../../hoc";
import { CartOptions, CartTable } from "../../../components/Cart";

const CartItems = () => {
	const [tableHeadings, setTableHeadings] = useState([
		{ key: nanoid(), title: "Product" },
		{ key: nanoid(), title: "Price" },
		{ key: nanoid(), title: "Quantity" },
		{ key: nanoid(), title: "Subtotal" },
	]);

	const [tableData, setTableData] = useState([
		{
			key: nanoid(),
			title:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repudiandae omnis velit aut minima quaerat?.",
			price: 120,
			quantity: 3,
		},
	]);

	return (
		<section className={classes.cart}>
			<Row>
				<CartTable tableHeadings={tableHeadings} tableData={tableData} />
				<CartOptions />
			</Row>
		</section>
	);
};

export default CartItems;
