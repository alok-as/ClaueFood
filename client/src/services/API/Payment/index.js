import axios from "../../axios";

const Payment = {
	initiate() {
		return axios.request({
			method: "GET",
			url: "/payments",
		});
	},
};

export default Payment;
