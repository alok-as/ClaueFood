import React from "react";
import { useHistory, useLocation, Switch, Route, Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import classes from "./index.module.scss";
import { ErrorBoundary, Row } from "../../../hoc";
import {
	OrderSummary,
	PaymentsForm,
	ShippingForm,
} from "../../../components/Checkout";
import { Stepper } from "../../../components/UI";

import {
	fetchZipCodeDetails,
	saveShippingDetails,
} from "../../../redux/Checkout/actions";

const CheckoutForm = () => {
	const history = useHistory();
	const { pathname } = useLocation();
	const dispatch = useDispatch();

	const { shippingDetails } = useSelector((state) => state.checkout);

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
				<Stepper pathname={pathname} />
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
					<ErrorBoundary errorMessage="Something went wrong">
						<OrderSummary
							pathname={pathname}
							shippingDetails={shippingDetails.details}
						/>
					</ErrorBoundary>
				</div>
			</Row>
		</div>
	);
};

export default CheckoutForm;
