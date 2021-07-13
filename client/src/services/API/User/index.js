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
	fetchCartItems() {
		return axios.request({
			method: "GET",
			url: "/user/cart",
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
				userId: "60a0ea5d30c2205808ecb2fc",
			},
		});
	},
	removeProductFromCart(productId) {
		return axios.request({
			method: "DELETE",
			url: `/user/cart/${productId}`,
			data: {
				userId: "60a0ea5d30c2205808ecb2fc",
			},
		});
	},
};

export default Auth;
