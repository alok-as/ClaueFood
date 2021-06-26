import React, { useState } from "react";

import classes from "./index.module.scss";
import { Row } from "../../../hoc";
import {
	GridResizer,
	ProductGrid,
	Toolbar,
} from "../../../components/ProductListing";

import dummyProducts from "../../../data/bestseller";

const Listing = () => {
	const [productsPerColumn, setProductsPerColumn] = useState(4);

	return (
		<section className={classes.listing}>
			<Row>
				<GridResizer setProductsPerColumn={setProductsPerColumn} />
				<Toolbar />
				<ProductGrid
					products={dummyProducts}
					productsPerColumn={productsPerColumn}
				/>
			</Row>
		</section>
	);
};

export default Listing;
