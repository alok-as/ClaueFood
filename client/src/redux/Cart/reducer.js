import * as actionTypes from "./actionTypes";

const cartReducer = (state = { showCheckoutModal: false }, action) => {
	switch (action.type) {
		case actionTypes.ADD_PRODUCT_TO_CART_REQUEST:
			return { ...state };
		case actionTypes.ADD_PRODUCT_TO_CART_SUCCESS:
			return { ...state, showCheckoutModal: true };
		case actionTypes.ADD_PRODUCT_TO_CART_FAILED:
			return { ...state };

		case actionTypes.REMOVE_PRODUCT_FROM_CART_REQUEST:
			return { ...state };
		case actionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS:
			return { ...state };
		case actionTypes.REMOVE_PRODUCT_FROM_CART_FAILED:
			return { ...state };

		case actionTypes.CLOSE_PROCEED_TO_CHECKOUT_MODAL:
			return { ...state, showCheckoutModal: false };

		default:
			return state;
	}
};

export default cartReducer;
