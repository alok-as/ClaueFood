import * as actionTypes from "./actionTypes";
import Product from "../../services/API/Product";

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

export const fetchProductById = (reqBody) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.FETCH_PRODUCT_BY_ID_REQUEST,
		});

		const { data } = await Product.fetchById(reqBody);
		console.log("Checking response from fetching product by id:", data);

		await dispatch({
			type: actionTypes.FETCH_ALL_PRODUCTS_SUCCESS,
		});
	} catch (error) {
		console.error("Error fetching product by id:", error);
		dispatch({
			type: actionTypes.FETCH_PRODUCT_BY_ID_FAILED,
		});
	}
};
