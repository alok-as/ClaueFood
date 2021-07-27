import * as actionTypes from "./actionTypes";

const wishlistReducer = (
	state = {
		wishlistItems: [],
		wishlistItemsCount: 0,
	},
	action
) => {
	switch (action.type) {
		case actionTypes.FETCH_USERS_WISHLIST_REQUEST:
			return { ...state, isLoading: true };
		case actionTypes.FETCH_USERS_WISHLIST_SUCCESS:
			return {
				...state,
				wishlistItems: action.payload,
				isLoading: false,
			};
		case actionTypes.FETCH_USERS_WISHLIST_FAILED:
			return {
				...state,
				isLoading: false,
				wishlistItems: [],
			};

		case actionTypes.ADD_PRODUCT_TO_WISHLIST_REQUEST:
			return { ...state };
		case actionTypes.ADD_PRODUCT_TO_WISHLIST_SUCCESS:
			return {
				...state,
			};
		case actionTypes.ADD_PRODUCT_TO_WISHLIST_FAILED:
			return {
				...state,
			};

		case actionTypes.SET_WISHLIST_ITEMS:
			return {
				...state,
				wishlistItems: action.payload,
			};

		case actionTypes.SET_WISHLIST_ITEMS_COUNT:
			return {
				...state,
				wishlistItemsCount: action.payload,
			};
		default:
			return state;
	}
};

export default wishlistReducer;
