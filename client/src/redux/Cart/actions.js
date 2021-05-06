import * as actionTypes from "./actionTypes";
import User from "../../services/API/User";

export const addProductToCart = (reqBody) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.ADD_PRODUCT_TO_CART_REQUEST,
		});

		const { data } = await User.addProductToCart(reqBody);
		console.log("Checking response on adding product to cart:", data);

		dispatch({
			type: actionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.ADD_PRODUCT_TO_CART_FAILED,
		});
	}
};

export const removeProductFromCart = (reqBody) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.REMOVE_PRODUCT_FROM_CART_REQUEST,
		});

		const { data } = await User.removeProductFromCart(reqBody);
		console.log("Checking response on removing product from cart:", data);

		dispatch({
			type: actionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.REMOVE_PRODUCT_FROM_CART_FAILED,
		});
	}
};
