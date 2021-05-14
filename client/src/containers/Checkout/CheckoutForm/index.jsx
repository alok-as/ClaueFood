import React from "react";
import { useHistory, Switch, Route, Redirect } from "react-router";

import classes from "./index.module.scss";
import { Row } from "../../../hoc";
import {
	OrderSummary,
	PaymentsForm,
	ShippingForm,
} from "../../../components/Checkout";

const CheckoutForm = () => {
	const history = useHistory();

	const switchToPaymentsHandler = () => {
		history.push("/checkout/payment");
	};

	return (
		<div className={classes.checkout}>
			<Row className={classes.checkout__content}>
				<h1>Stepper Step</h1>
				<div className={classes.checkout__wrapper}>
					<Switch>
						<Route
							path="/checkout/shipping"
							render={() => (
								<ShippingForm switchToPayment={switchToPaymentsHandler} />
							)}
						/>
						<Route path="/checkout/payment" component={PaymentsForm} />
						<Route path="/checkout">
							<Redirect to="/checkout/shipping" />
						</Route>
					</Switch>
					<OrderSummary />
				</div>
			</Row>
		</div>
	);
};

export default CheckoutForm;
