import * as actionTypes from "./actionTypes";
import Auth from "../../services/API/Auth/";

export const registerUser = (reqData) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.REGISTER_USER_REQUEST,
		});

		const { data } = await Auth.registerUser(reqData);
		dispatch({
			type: actionTypes.REGISTER_USER_SUCCESS,
		});
	} catch (error) {
		console.error("Error registering user:", error);
		dispatch({
			type: actionTypes.REGISTER_USER_FAILED,
		});
	}
};

export const loginUser = (reqData) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.LOGIN_USER_REQUEST,
		});

		const { data } = await Auth.loginUser(reqData);
		dispatch({
			type: actionTypes.LOGIN_USER_SUCCESS,
		});
	} catch (error) {
		console.error("Error loggin in user:", error);
		dispatch({
			type: actionTypes.LOGIN_USER_FAILED,
		});
	}
};
