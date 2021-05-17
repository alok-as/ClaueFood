import React from "react";
import { useHistory, Switch, Route, Redirect } from "react-router";
import { useDispatch } from "react-redux";

import classes from "./index.module.scss";
import { Row } from "../../../hoc";
import {
	OrderSummary,
	PaymentsForm,
	ShippingForm,
} from "../../../components/Checkout";

import {
	fetchZipCodeDetails,
	saveShippingDetails,
} from "../../../redux/Checkout/actions";
import { setValueInSessionStorage } from "../../../utils";

const CheckoutForm = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const fetchZipCodeDetailsHandler = (zipCode) => {
		dispatch(fetchZipCodeDetails(zipCode));
	};

	const switchToPaymentsHandler = (details) => {
		dispatch(saveShippingDetails(details));
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
								<ShippingForm
									switchToPayment={switchToPaymentsHandler}
									fetchZipCodeDetails={fetchZipCodeDetailsHandler}
								/>
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
