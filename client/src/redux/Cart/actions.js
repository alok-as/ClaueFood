import * as actionTypes from "./actionTypes";
import User from "../../services/API/User";
import { calculateCartItemsCount } from "../../utils";

export const setCartItems = (cartItems) => (dispatch) => {
	dispatch({
		type: actionTypes.SET_CART_ITEMS,
		payload: cartItems,
	});

	const cartItemsCount = calculateCartItemsCount(cartItems);
	dispatch({
		type: actionTypes.SET_CART_ITEMS_COUNT,
		payload: cartItemsCount,
	});
};

export const addProductToCart = (productId) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.ADD_PRODUCT_TO_CART_REQUEST,
		});

		const { data } = await User.addProductToCart(productId);
		console.log("Checking response on adding product to cart:", data);

		dispatch({
			type: actionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
		});

		dispatch(setCartItems(data.data));
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

export const closeCheckoutModal = () => (dispatch) => {
	dispatch({
		type: actionTypes.CLOSE_PROCEED_TO_CHECKOUT_MODAL,
	});
};
