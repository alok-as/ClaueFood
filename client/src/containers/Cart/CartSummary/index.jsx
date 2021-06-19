import React from "react";
import { Row } from "../../../hoc";
import { CostCalculator, CartTotal } from "../../../components/Cart";

import classes from "./index.module.scss";

const CartSummary = () => {
	return (
		<section className={classes.summary}>
			<Row className={classes.summary__content}>
				<CostCalculator />
				<CartTotal />
			</Row>
		</section>
	);
};

export default CartSummary;
