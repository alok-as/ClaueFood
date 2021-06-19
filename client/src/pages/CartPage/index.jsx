import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

import { Banner } from "../../components/UI";
import { CartItems, CartSummary } from "../../containers/Cart";

const CheckoutPage = () => {
	const { pathname } = useLocation();

	return (
		<Fragment>
			<Banner path={pathname} />
			<CartItems />
			<CartSummary />
		</Fragment>
	);
};

export default CheckoutPage;
