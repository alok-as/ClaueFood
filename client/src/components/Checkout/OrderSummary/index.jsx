import React from "react";
import classes from "./index.module.scss";
import { EditableItem } from "../../UI";

const OrderSummary = () => {
	return (
		<div className={classes.summary}>
			<p className={classes.summary__title}>Order Summary</p>
			<ul className={classes.summary__pricelist}>
				<li className={classes.summary__priceitem}>
					<span>Cart subtotal:</span>
					<span>$170.00</span>
				</li>
				<li className={classes.summary__priceitem}>
					<span>Shipping flat rate - fixed</span>
					<span>$5.00</span>
				</li>
				<li className={classes.summary__priceitem}>
					<span>Order Total</span>
					<span>$175.00</span>
				</li>
			</ul>
			<ul className={classes.summary__detailslist}>
				<EditableItem title="Ship to">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut eaque
					deleniti neque architecto magni, autem aspernatur nostrum. Ducimus
					aliquam, corporis esse pariatur ipsam minus unde, adipisci asperiores,
					odit ipsa laborum.
				</EditableItem>
				<EditableItem title="Shipping method">Flat rate - fixed</EditableItem>
			</ul>
		</div>
	);
};

export default OrderSummary;
