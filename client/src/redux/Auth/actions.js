import * as actionTypes from "./actionTypes";
import User from "../../services/API/User/";

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
		console.log("Error");
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
