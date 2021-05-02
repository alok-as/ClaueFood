import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const registerDetails = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.REGISTER_USER_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case actionTypes.REGISTER_USER_SUCCESS:
			return {
				...state,
				isSuccess: true,
				isLoading: false,
				message: action.payload,
			};
		case actionTypes.REGISTER_USER_FAILED:
			return {
				...state,
				isSuccess: false,
				isLoading: false,
				message: action.payload,
			};
		case actionTypes.CLEAR_REGISTER_METADATA:
			return {
				...state,
				isLoading: undefined,
				isSuccess: undefined,
				message: undefined,
			};
		default:
			return state;
	}
};

const loginDetails = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.LOGIN_USER_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case actionTypes.LOGIN_USER_SUCCESS:
			return {
				...state,
				isSuccess: true,
				isLoading: false,
			};
		case actionTypes.LOGIN_USER_FAILED:
			return {
				...state,
				isSuccess: false,
				isLoading: false,
			};
		default:
			return state;
	}
};

const authReducer = combineReducers({
	registerDetails,
	loginDetails,
});

export default authReducer;
