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
				userId: "6093c3f33d2f7d52104ae7b1",
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
