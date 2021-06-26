import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

import { Banner } from "../../components/UI";
import { CustomerForm } from "../../containers/CustomerLogin";

const CustomerLoginPage = () => {
	const { pathname } = useLocation();

	return (
		<Fragment>
			<Banner path={pathname} />
			<CustomerForm />
		</Fragment>
	);
};

export default CustomerLoginPage;
