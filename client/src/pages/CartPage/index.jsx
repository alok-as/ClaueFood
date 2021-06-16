import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

import { Banner } from "../../components/UI";
import { CartItems } from "../../containers/Cart";

const CheckoutPage = () => {
	const { pathname } = useLocation();

	return (
		<Fragment>
			<Banner path={pathname} />
			<CartItems />
		</Fragment>
	);
};

export default CheckoutPage;
