import axios from "../../axios";

const Auth = {
	register(data) {
		return axios.request({
			method: "POST",
			url: "/user/register",
			data,
		});
	},
	login(data) {
		return axios.request({
			method: "POST",
			url: "/user/login",
			data,
		});
	},
};

export default Auth;
