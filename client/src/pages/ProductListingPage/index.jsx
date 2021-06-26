import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

import { Banner } from "../../components/UI";
import { Listing } from "../../containers/ProductListing";
import { parseQueryParams } from "../../utils";

const ProductListingPage = () => {
	const { search } = useLocation();

	let path = "All Products";

	if (search.length) {
		const queryParams = parseQueryParams(search);
		path = queryParams.category;
	}

	return (
		<Fragment>
			<Banner path={path} />
			<Listing />
		</Fragment>
	);
};

export default ProductListingPage;
