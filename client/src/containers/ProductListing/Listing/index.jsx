import React, { useState } from "react";

import classes from "./index.module.scss";
import { Portal, Row } from "../../../hoc";
import {
	GridResizer,
	ProductGrid,
	Toolbar,
} from "../../../components/ProductListing";
import { FullScreenLoader } from "../../../components/UI";

import dummyProducts from "../../../data/bestseller";

const Listing = () => {
	const [productsPerColumn, setProductsPerColumn] = useState(4);

	return (
		<section className={classes.listing}>
			<Row>
				<Portal>
					<FullScreenLoader isVisible={false} />
				</Portal>
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
