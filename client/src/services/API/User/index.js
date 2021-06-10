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
	fetchAuthTokens({ userId }) {
		return axios.request({
			method: "GET",
			url: `/user/tokens/${userId}`,
		});
	},
	fetchData() {
		return axios.request({
			method: "GET",
			url: "/user",
		});
	},
	addProductToWishlist({ productId }) {
		return axios.request({
			method: "POST",
			url: `/user/wishlist/${productId}`,
		});
	},
	removeProductFromWishlist({ productId }) {
		return axios.request({
			method: "DELETE",
			url: `/user/wishlist/${productId}`,
		});
	},
	addProductToCart(productId) {
		return axios.request({
			method: "POST",
			url: `/user/cart/${productId}`,
			data: {
				userId: "6097ad5818c7083facd87443",
			},
		});
	},
	removeProductFromCart({ productId }) {
		return axios.request({
			method: "DELETE",
			url: `/user/cart/${productId}`,
		});
	},
};

export default Auth;
