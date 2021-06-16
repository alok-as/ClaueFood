import React, { useState } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Row } from "../../../hoc";
import { Button } from "../../../components/UI";

const CartItems = () => {
	const [tableHeadings, setTableHeadings] = useState([
		{ key: nanoid(), title: "Product" },
		{ key: nanoid(), title: "Price" },
		{ key: nanoid(), title: "Quanity" },
		{ key: nanoid(), title: "Subtotal" },
	]);

	const [tableData, setTableData] = useState([
		{ key: nanoid(), title: "Product", price: 120, quantity: 3 },
		{ key: nanoid(), title: "Price", price: 140, quantity: 1 },
		{ key: nanoid(), title: "Quanity", price: 60, quantity: 2 },
		{ key: nanoid(), title: "Subtotal", price: 75, quantity: 4 },
	]);

	return (
		<section className={classes.cart}>
			<Row>
				<table className={classes.cart__table}>
					<thead>
						{tableHeadings.map((heading) => (
							<th key={heading.key}>{heading.title}</th>
						))}
					</thead>
					<tbody>
						{tableData.map((data) => (
							<tr key={data.key}>
								<td>{data.title}</td>
								<td>{data.price}</td>
								<td>{data.quantity}</td>
								<td>{data.quantity * data.price}</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className={classes.cart__options}>
					<Button color="green">Continue Shopping</Button>
					<Button color="white" className={classes.cart__update}>
						Update Shopping Cart
					</Button>
					<Button color="black">Clear Shopping Cart</Button>
				</div>
			</Row>
		</section>
	);
};

export default CartItems;
