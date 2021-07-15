import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";
import Cookie from "js-cookie";

const isAuthenticatedFlag = Cookie.get("isAuthenticated");

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
				message: action.payload,
			};
		case actionTypes.LOGIN_USER_FAILED:
			return {
				...state,
				isSuccess: false,
				isLoading: false,
				message: action.payload,
			};
		case actionTypes.CLEAR_LOGIN_METADATA:
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

const authDetails = (
	state = { isAuthenticated: isAuthenticatedFlag || false },
	action
) => {
	switch (action.type) {
		case actionTypes.SET_IS_AUTHENTICATED:
			return { ...state, isAuthenticated: action.payload };
		default:
			return state;
	}
};

const authReducer = combineReducers({
	authDetails,
	registerDetails,
	loginDetails,
});

export default authReducer;
