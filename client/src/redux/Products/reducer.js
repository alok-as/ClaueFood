import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";
import featuredData from "../../data/featured";

const featuredDetails = (
	state = {
		products: {
			featured: featuredData,
			bestseller: [],
			special: [],
			latest: [],
		},
	},
	action
) => {
	switch (action.type) {
		case actionTypes.FETCH_FEATURED_PRODUCTS_REQUEST:
			return { ...state, isLoading: true };
		case actionTypes.FETCH_FEATURED_PRODUCTS_SUCCESS:
			return {
				...state,
				isLoading: false,
				products: {
					...state.products,
					[action.category]: action.payload,
				},
			};
		case actionTypes.FETCH_FEATURED_PRODUCTS_FAILED:
			return {
				...state,
				isLoading: false,
				products: {
					...state.products,
					[action.category]: [],
				},
			};
		default:
			return state;
	}
};

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

const productDetails = (state = { details: null }, action) => {
	switch (action.type) {
		case actionTypes.FETCH_PRODUCT_BY_SLUG_REQUEST:
			return { ...state, isLoading: true };
		case actionTypes.FETCH_PRODUCT_BY_SLUG_SUCCESS:
			return {
				...state,
				success: true,
				isLoading: false,
				details: action.payload,
			};
		case actionTypes.FETCH_PRODUCT_BY_SLUG_FAILED:
			return { ...state, success: false, isLoading: false, details: null };
		default:
			return state;
	}
};

const productsReducer = combineReducers({
	featuredDetails,
	productsDetails,
	productDetails,
});

export default productsReducer;
