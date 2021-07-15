import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

import { Banner } from "../../components/UI";

const WishlistPage = () => {
	const { pathname } = useLocation();

	return (
		<Fragment>
			<Banner path={pathname} />
		</Fragment>
	);
};

export default WishlistPage;
