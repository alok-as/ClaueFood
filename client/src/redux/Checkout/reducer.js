import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";
import { extractValueFromSessionStorage } from "../../utils";

const zipCodeDetailsSample = [
	{
		area: "Dabri",
		district: "South West Delhi",
		lat: 28.603514,
		lng: 77.101779,
		pincode: 110045,
		state: "Delhi",
	},
	{
		area: "Indira Park",
		district: "South West Delhi",
		lat: 17.41289,
		lng: 78.48533,
		pincode: 110045,
		state: "Delhi",
	},

	{
		area: "Nasirpur",
		district: "South West Delhi",
		lat: 28.603514,
		lng: 77.101779,
		pincode: 110045,
		state: "Delhi",
	},

	{
		area: "Palam Village",
		district: "South West Delhi",
		lat: 28.603514,
		lng: 77.101779,
		pincode: 110045,
		state: "Delhi",
	},
];

const citiesSample = zipCodeDetailsSample.map((detail) => detail.area);
const selectedStateSample = zipCodeDetailsSample[0].state;

const cacheDetails = extractValueFromSessionStorage("shippingDetails");

const shippingDetails = (
	state = {
		// cities: cacheDetails ? cacheDetails.cities : [],
		// address: cacheDetails ? cacheDetails.address : null,
		// phoneNumber: cacheDetails ? cacheDetails.phoneNumber : "",
		// selectedState: cacheDetails ? cacheDetails.selectedState : "",

		//Testing
		cities: citiesSample,
		selectedState: selectedStateSample,
	},
	action
) => {
	switch (action.type) {
		case actionTypes.FETCH_PINCODE_DETAILS_REQUEST:
			return { ...state };
		case actionTypes.FETCH_PINCODE_DETAILS_SUCCESS:
			return {
				...state,
				cities: action.cities,
				address: {
					...state.address,
					state: action.selectedState,
				},
			};
		case actionTypes.FETCH_PINCODE_DETAILS_FAILED:
			return {
				...state,
				cities: [],
				address: null,
			};

		case actionTypes.SAVE_SHIPPING_DETAILS:
			return { ...state, details: action.payload };
		default:
			return state;
	}
};

const paymentDetails = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.MAKE_PAYMENT_REQUEST:
			return { ...state };
		case actionTypes.MAKE_PAYMENT_SUCCESS:
			return { ...state };
		case actionTypes.MAKE_PAYMENT_FAILED:
			return { ...state };
		default:
			return state;
	}
};

const checkoutReducer = combineReducers({
	shippingDetails,
	paymentDetails,
});

export default checkoutReducer;
