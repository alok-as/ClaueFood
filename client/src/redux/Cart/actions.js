import { batch } from "react-redux";
import * as actionTypes from "./actionTypes";
import User from "../../services/API/User";
import { calculateCartItemsCount, calculateTotalCartPrice } from "../../utils";

export const fetchUserCartItems = () => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.FETCH_USER_CART_ITEMS_REQUEST,
		});

		const { data } = await User.fetchCartItems();
		console.log("Checking response on fetching cart items:", data);

		const cartItems = data.data;
		const cartItemsCount = calculateCartItemsCount(cartItems);

		batch(() => {
			dispatch({
				type: actionTypes.FETCH_USER_CART_ITEMS_SUCCESS,
				payload: cartItems,
			});
			dispatch({
				type: actionTypes.SET_CART_ITEMS_COUNT,
				payload: cartItemsCount,
			});
		});
	} catch (error) {
		console.log("Error fetching user cart items:", error.message);
		dispatch({
			type: actionTypes.FETCH_USER_CART_ITEMS_FAILED,
		});
	}
};

export const setCartItems =
	(item, type = "add") =>
	(dispatch, getState) => {
		let { cartItemsCount, cartItems } = getState().cart;
		const index = cartItems.findIndex((i) => i._id === item._id);

		if (type.includes("add")) {
			if (index !== -1) {
				cartItems[index].quantity++;
			} else {
				cartItems = [...cartItems, item];
			}

			cartItemsCount++;
		} else {
			cartItems.splice(index, 1);
			cartItemsCount--;
		}

		batch(() => {
			dispatch({
				type: actionTypes.SET_CART_ITEMS,
				payload: cartItems,
			});
			dispatch({
				type: actionTypes.SET_CART_ITEMS_COUNT,
				payload: cartItemsCount,
			});
		});
	};

const setCheckoutModalData = (data) => {
	return {
		type: actionTypes.SET_CHECKOUT_MODAL_DATA,
		payload: data,
	};
};

export const addProductToCart = (productId, modalData) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.ADD_PRODUCT_TO_CART_REQUEST,
		});

		const { data } = await User.addProductToCart(productId);
		console.log("Checking response on adding product to cart:", data);

		const addedProduct = data.data;
		const price = 1200;

		// const price = calculateTotalCartPrice(cartItems);

		batch(() => {
			dispatch(setCheckoutModalData({ ...modalData, price }));
			dispatch(setCartItems(addedProduct, "added"));
			dispatch({
				type: actionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
			});
		});
	} catch (error) {
		dispatch({
			type: actionTypes.ADD_PRODUCT_TO_CART_FAILED,
		});
	}
};

export const removeProductFromCart = (productId) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.REMOVE_PRODUCT_FROM_CART_REQUEST,
		});

		const { data } = await User.removeProductFromCart(productId);
		console.log("Checking response on removing product from cart:", data);

		batch(() => {
			dispatch(setCartItems({ _id: productId }, "remove"));
			dispatch({
				type: actionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS,
			});
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
