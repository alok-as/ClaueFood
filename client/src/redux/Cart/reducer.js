import * as actionTypes from "./actionTypes";

const cartReducer = (
	state = {
		showCheckoutModal: false,
		checkoutModalData: {},
		cartItems: [],
		cartItemsCount: 0,
		cartTotalPrice: 0,
	},
	action
) => {
	switch (action.type) {
		case actionTypes.FETCH_USER_CART_ITEMS_REQUEST:
			return { ...state, isLoading: true };
		case actionTypes.FETCH_USER_CART_ITEMS_SUCCESS:
			return { ...state, isLoading: false, cartItems: action.payload };
		case actionTypes.FETCH_USER_CART_ITEMS_FAILED:
			return { ...state, isLoading: false, cartItems: [] };

		case actionTypes.ADD_PRODUCT_TO_CART_REQUEST:
			return { ...state };
		case actionTypes.ADD_PRODUCT_TO_CART_SUCCESS:
			return { ...state, showCheckoutModal: true };
		case actionTypes.ADD_PRODUCT_TO_CART_FAILED:
			return { ...state, cartItems: [] };

		case actionTypes.SET_CHECKOUT_MODAL_DATA:
			return { ...state, checkoutModalData: action.payload };

		case actionTypes.REMOVE_PRODUCT_FROM_CART_REQUEST:
			return { ...state };
		case actionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS:
			return { ...state };
		case actionTypes.REMOVE_PRODUCT_FROM_CART_FAILED:
			return { ...state };

		case actionTypes.SET_CART_ITEMS:
			return { ...state, cartItems: action.payload };

		case actionTypes.SET_CART_ITEMS_COUNT:
			return { ...state, cartItemsCount: action.payload };

		case actionTypes.SET_CART_ITEMS_PRICE:
			return { ...state, cartTotalPrice: action.payload };

		case actionTypes.CLOSE_PROCEED_TO_CHECKOUT_MODAL:
			return { ...state, showCheckoutModal: false };

		default:
			return state;
	}
};

export default cartReducer;
