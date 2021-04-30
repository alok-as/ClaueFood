import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const authRegister = (state, action) => {
	switch (action.type) {
		case actionTypes.REGISTER_USER_REQUEST:
			return {
				...state,
			};
		case actionTypes.REGISTER_USER_SUCCESS:
			return {
				...state,
			};
		case actionTypes.REGISTER_USER_FAILED:
			return {
				...state,
			};
		default:
			return state;
	}
};

const authLogin = (state, action) => {
	switch (action.type) {
		case actionTypes.LOGIN_USER_REQUEST:
			return {
				...state,
			};
		case actionTypes.LOGIN_USER_SUCCESS:
			return {
				...state,
			};
		case actionTypes.LOGIN_USER_FAILED:
			return {
				...state,
			};
		default:
			return state;
	}
};

const authReducer = combineReducers({
	authRegister,
	authLogin,
});

export default authReducer;
