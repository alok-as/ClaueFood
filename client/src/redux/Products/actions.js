import * as actionTypes from "./actionTypes";
import Product from "../../services/API/Product";

import featuredData from "../../data/featured";
import bestsellerData from "../../data/bestseller";

export const fetchAllProducts = (reqBody) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.FETCH_ALL_PRODUCTS_REQUEST,
		});

		const { data } = await Product.fetchAll(reqBody);

		await dispatch({
			type: actionTypes.FETCH_ALL_PRODUCTS_SUCCESS,
			payload: data.data,
		});
	} catch (error) {
		console.error("Error fetching all products:", error);
		dispatch({
			type: actionTypes.FETCH_ALL_PRODUCTS_FAILED,
		});
	}
};

export const setFeaturedProducts = (reqBody) => (dispatch, getState) => {
	const selectedProducts =
		getState().products.featuredDetails.products[reqBody.category];

	if (!selectedProducts.length) {
		dispatch(fetchProductsByFilter(reqBody));
	}
};

export const fetchProductsByFilter = (reqBody) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.FETCH_PRODUCTS_BY_FILTER_REQUEST,
		});

		const { data } = await Product.fetchAll(reqBody);
		console.log("Checking filtered products:", data);

		await dispatch({
			type: actionTypes.FETCH_PRODUCTS_BY_FILTER_SUCCESS,
			payload: data.data,
			category: reqBody.category,
		});
	} catch (error) {
		console.error("Error fetching products with filter:", error);
		dispatch({
			type: actionTypes.FETCH_PRODUCTS_BY_FILTER_FAILED,
		});
	}
};

export const fetchProductBySlug = (slug) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.FETCH_PRODUCT_BY_SLUG_REQUEST,
		});

		const { data } = await Product.fetchBySlug(slug);
		console.log("Checking response from fetching product by slug:", data);

		await dispatch({
			type: actionTypes.FETCH_PRODUCT_BY_SLUG_SUCCESS,
			payload: data.data,
		});
	} catch (error) {
		console.error("Error fetching product by slug:", error);
		dispatch({
			type: actionTypes.FETCH_PRODUCT_BY_SLUG_FAILED,
		});
	}
};
