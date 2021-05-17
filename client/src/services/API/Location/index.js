import axios from "axios";

const axiosInstance = axios.create({
	baseURL:
		"https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1",
});

axiosInstance.defaults.headers.common["x-rapidapi-key"] =
	"73db53553bmsh64a7229337a22e3p1889d8jsn9720314f6ffe";
axiosInstance.defaults.headers.common["x-rapidapi-host"] =
	"india-pincode-with-latitude-and-longitude.p.rapidapi.com";

const Rapid = {
	fetchAllIndianStates() {
		return axiosInstance.request({
			method: "GET",
			url: "/state",
		});
	},
	fetchZipCodeDetails(zipCode) {
		return axiosInstance.request({
			method: "GET",
			url: `/pincode/${zipCode}`,
		});
	},
};

export default Rapid;
