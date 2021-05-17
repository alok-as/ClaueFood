import * as actionTypes from "./actionTypes";
import Rapid from "../../services/API/Location";
import { setValueInSessionStorage } from "../../utils";

export const fetchZipCodeDetails = (zipCode) => async (dispatch) => {
	try {
		dispatch({
			type: actionTypes.FETCH_PINCODE_DETAILS_REQUEST,
		});

		// //FINAL
		// const { data } = await Rapid.fetchZipCodeDetails(zipCode);
		// console.log("Checking response from fetching zip code details", data);

		// const cities = data.map((detail) => detail.area);
		// const selectedState = data[0].state;

		// dispatch({
		// 	type: actionTypes.FETCH_PINCODE_DETAILS_SUCCESS,
		// 	cities,
		// 	selectedState,
		// });
	} catch (error) {
		dispatch({
			type: actionTypes.FETCH_PINCODE_DETAILS_FAILED,
		});
	}
};

export const saveShippingDetails = (details) => {
	// setValueInSessionStorage("shippingDetails", details);
	return {
		type: actionTypes.SAVE_SHIPPING_DETAILS,
		payload: details,
	};
};
