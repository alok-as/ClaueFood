import React from "react";
import { combineClasses } from "../../../utils";
import { Quantity } from "../../UI";

import classes from "./index.module.scss";

const CartTable = ({ tableHeadings, tableData }) => {
	const formatPrice = (price, places = 2) => {
		return price.toFixed(places);
	};

	return (
		<table className={classes.table}>
			<thead>
				<tr>
					{tableHeadings.map((heading) => (
						<th className={classes.table__heading} key={heading.key}>
							{heading.title}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{tableData.map((data) => (
					<tr key={data._id}>
						<td className={classes.table__data}>{data.product.description}</td>
						<td
							className={combineClasses([
								classes.table__data,
								classes.table__price,
							])}
						>
							${formatPrice(data.product.price)}
						</td>
						<td className={classes.table__data}>
							<Quantity stock={24} qty={data.quantity} />
						</td>
						<td
							className={combineClasses([
								classes.table__data,
								classes.table__price,
							])}
						>
							${formatPrice(data.quantity * data.product.price)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default CartTable;
