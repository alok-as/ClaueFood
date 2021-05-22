import React from "react";
import classes from "./index.module.scss";
import { EditableItem } from "../../UI";
import { Fragment } from "react";

const OrderSummary = ({ pathname, shippingDetails }) => {
	return (
		<div className={classes.summary}>
			<p className={classes.summary__title}>Order Summary</p>
			{pathname.includes("payment") && (
				<Fragment>
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
							<p className={classes.summary__text}>Alok Sharma</p>
							<p className={classes.summary__text}>
								{shippingDetails.address.street} {shippingDetails.address.city},
								<br />
								{shippingDetails.address.state} -
								{shippingDetails.address.zipCode
									? shippingDetails.address.zipCode
									: "110045"}
							</p>
							<p className={classes.summary__text}>India</p>
							<p className={classes.summary__text}>
								{shippingDetails.phoneNumber}
							</p>
						</EditableItem>
						<EditableItem title="Shipping method">
							Flat rate - fixed
						</EditableItem>
					</ul>
				</Fragment>
			)}
		</div>
	);
};

export default OrderSummary;
