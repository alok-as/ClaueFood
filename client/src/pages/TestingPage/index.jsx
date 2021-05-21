import React from "react";
import axios from "axios";
import { initiateRazorPayPayment } from "../../utils/payments";

const Testing = () => {
	const placeOrder = async () => {
		try {
			const { data } = await axios.get("http://localhost:3001/api/payments");
			const result = await initiateRazorPayPayment(data.data);

			console.log("Checking Payment result", result);
		} catch (error) {
			console.log("Error fetching order details", error.message);
		}
	};

	return (
		<div>
			<h1>Testing Page</h1>
			<button onClick={placeOrder}>Proceed to Pay</button>
		</div>
	);
};

export default Testing;
