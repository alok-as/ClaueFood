import { batch } from "react-redux";
import * as actionTypes from "./actionTypes";
import User from "../../services/API/User";

export const fetchUsersWishlist = (productId) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.FETCH_USERS_WISHLIST_REQUEST,
		});

		const { data } = await User.fetchWishlist(productId);
		const wishlistItems = data.data;
		console.log("Checking response on adding product to wishlist:", data);

		batch(() => {
			dispatch({
				type: actionTypes.FETCH_USERS_WISHLIST_SUCCESS,
				payload: wishlistItems,
			});
			dispatch({
				type: actionTypes.SET_WISHLIST_ITEMS_COUNT,
				payload: wishlistItems.length,
			});
		});
	} catch (error) {
		dispatch({
			type: actionTypes.FETCH_USERS_WISHLIST_FAILED,
		});
	}
};

export const addProductToWishlist = (productId) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.ADD_PRODUCT_TO_WISHLIST_REQUEST,
		});

		const { data } = await User.addProductToWishlist(productId);
		console.log("Checking response on adding product to wishlist:", data);

		batch(() => {
			dispatch({
				type: actionTypes.ADD_PRODUCT_TO_WISHLIST_SUCCESS,
			});
			dispatch(setWishlistItems(data.data));
		});
	} catch (error) {
		dispatch({
			type: actionTypes.ADD_PRODUCT_TO_WISHLIST_FAILED,
		});
	}
};

export const removeProductFromWishlist = (productId) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.REMOVE_PRODUCT_FROM_WISHLIST_REQUEST,
		});

		const { data } = await User.removeProductFromCart(productId);
		console.log("Checking response on removing product from wishlist:", data);

		batch(() => {
			dispatch(setWishlistItems());
			dispatch({
				type: actionTypes.REMOVE_PRODUCT_FROM_WISHLIST_SUCCESS,
			});
		});
	} catch (error) {
		console.error("Error removing product from wishlist", error.message);
		dispatch({
			type: actionTypes.REMOVE_PRODUCT_FROM_WISHLIST_FAILED,
		});
	}
};

export const setWishlistItems =
	(item, type = "add") =>
	(dispatch, getState) => {
		let { wishlistItemsCount, wishlistItems } = getState().wishlist;
		const index = wishlistItems.findIndex((i) => i._id === item._id);

		if (type.includes("add")) {
			wishlistItems = [...wishlistItems, item];
			wishlistItemsCount++;
		} else {
			wishlistItems.splice(index, 1);
			wishlistItemsCount--;
		}

		batch(() => {
			dispatch({
				type: actionTypes.SET_WISHLIST_ITEMS,
				payload: wishlistItems,
			});
			dispatch({
				type: actionTypes.SET_WISHLIST_ITEMS_COUNT,
				payload: wishlistItemsCount,
			});
		});
	};
