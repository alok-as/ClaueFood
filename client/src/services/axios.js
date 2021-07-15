import axios from "axios";
import store from "../redux/store";
import { setIsUserAuthenticated } from "../redux/Auth/actions";

import config from "./config";
import User from "./API/User";

const instance = axios.create({
	baseURL: `${config.serverURL}:${config.port}/api`,
	withCredentials: true,
});

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const originalRequest = error.config;

		if (error.response.status === 401 && error.response.data.code === 490) {
			const { status } = await User.fetchAuthTokens(error.response.data.data);
			if (status === 200) {
				store.dispatch(setIsUserAuthenticated(true));
				return instance(originalRequest);
			}

			store.dispatch(setIsUserAuthenticated(false));
			return Promise.reject(error);
		}

		store.dispatch(setIsUserAuthenticated(false));
		return Promise.reject(error);
	}
);

export default instance;
