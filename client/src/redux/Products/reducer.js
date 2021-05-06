import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const productsDetails = (state = { products: [] }, action) => {
	switch (action.type) {
		case actionTypes.FETCH_ALL_PRODUCTS_REQUEST:
			return { ...state, isLoading: true };
		case actionTypes.FETCH_ALL_PRODUCTS_SUCCESS:
			return {
				...state,
				success: true,
				isLoading: false,
				products: action.payload,
			};
		case actionTypes.FETCH_ALL_PRODUCTS_FAILED:
			return { ...state, isLoading: false, success: false, products: [] };
		default:
			return state;
	}
};

const productDetails = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.FETCH_ALL_PRODUCTS_REQUEST:
			return { ...state };
		case actionTypes.FETCH_ALL_PRODUCTS_SUCCESS:
			return { ...state };
		case actionTypes.FETCH_ALL_PRODUCTS_FAILED:
			return { ...state };
		default:
			return state;
	}
};

const productsReducer = combineReducers({
	productsDetails,
	productDetails,
});

export default productsReducer;
