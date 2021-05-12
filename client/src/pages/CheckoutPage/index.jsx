import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { Banner } from "../../components/UI";
import { CheckoutForm } from "../../containers/Checkout";

const CheckoutPage = () => {
	const { pathname } = useLocation();

	return (
		<Fragment>
			<Banner path={pathname} />
			<CheckoutForm />
		</Fragment>
	);
};

export default CheckoutPage;
