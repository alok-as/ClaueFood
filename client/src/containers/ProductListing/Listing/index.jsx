import React, { useState } from "react";
import { useDispatch } from "react-redux";

import classes from "./index.module.scss";
import { Portal, Row } from "../../../hoc";
import {
	GridResizer,
	ProductGrid,
	Toolbar,
} from "../../../components/ProductListing";
import { FullScreenLoader } from "../../../components/UI";

import { addProductToCart } from "../../../redux/Cart/actions";
import dummyProducts from "../../../data/bestseller";

const Listing = () => {
	const [productsPerColumn, setProductsPerColumn] = useState(4);

	const dispatch = useDispatch();

	const addProductToCartHandler = (productId, modalData) => {
		dispatch(addProductToCart(productId, modalData));
	};

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
					addProductToCart={addProductToCartHandler}
				/>
			</Row>
		</section>
	);
};

export default Listing;
