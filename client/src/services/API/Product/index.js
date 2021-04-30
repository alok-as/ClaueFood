import axios from "../../axios";

const Auth = {
	register() {
		return axios.request({
			method: "POST",
			url: "/user/register",
		});
	},
	login() {
		return axios.request({
			method: "POST",
			url: "/user/login",
		});
	},
};

export default Auth;
