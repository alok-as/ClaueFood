import * as actionTypes from "./actionTypes";

export const setRedirectedFromRoute = (route) => (dispatch) => {
	dispatch({
		type: actionTypes.SET_REDIRECTED_FROM_ROUTE,
		payload: route,
	});
};
