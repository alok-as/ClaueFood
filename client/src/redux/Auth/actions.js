import { batch } from "react-redux";
import * as actionTypes from "./actionTypes";
import User from "../../services/API/User";
import Cookie from "js-cookie";

export const registerUser = (reqData) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.REGISTER_USER_REQUEST,
		});

		const { data } = await User.register(reqData);

		dispatch({
			type: actionTypes.REGISTER_USER_SUCCESS,
			payload: data.message,
		});
	} catch (error) {
		console.log("Error registering user:", error.message);
		const { data } = error.response;

		dispatch({
			type: actionTypes.REGISTER_USER_FAILED,
			payload: data.message,
		});
	}
};

export const clearRegisterMetaData = () => {
	return { type: actionTypes.CLEAR_REGISTER_METADATA };
};

export const loginUser = (reqData) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.LOGIN_USER_REQUEST,
		});

		const { data } = await User.login(reqData);

		batch(() => {
			dispatch({
				type: actionTypes.LOGIN_USER_SUCCESS,
			});

			dispatch(setIsUserAuthenticated(true));
		});
	} catch (error) {
		console.error("Error logging in user:", error);
		const { data } = error.response;

		dispatch({
			type: actionTypes.LOGIN_USER_FAILED,
			payload: data.message,
		});
	}
};

export const fetchUserData = () => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.FETCH_USER_DATA_REQUEST,
		});

		const { data } = await User.fetchData();
		dispatch({
			type: actionTypes.FETCH_USER_DATA_SUCCESS,
		});
	} catch (error) {
		console.error("Error fetching user data:", error);
		dispatch({
			type: actionTypes.FETCH_USER_DATA_FAILED,
		});
	}
};

export const clearLoginMetaData = () => {
	return { type: actionTypes.CLEAR_LOGIN_METADATA };
};

export const setIsUserAuthenticated = (isAuthenticated) => {
	if (isAuthenticated) {
		Cookie.set("isAuthenticated", true);
	} else {
		Cookie.remove("isAuthenticated");
	}

	return {
		type: actionTypes.SET_IS_AUTHENTICATED,
		payload: isAuthenticated,
	};
};
