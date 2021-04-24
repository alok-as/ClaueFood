import React, { Fragment } from "react";
import Header from "../../containers/Header";

import HomePage from "../../pages/HomePage";

const Layout = () => {
	return (
		<Fragment>
			<Header />
			<HomePage />
		</Fragment>
	);
};

export default Layout;
