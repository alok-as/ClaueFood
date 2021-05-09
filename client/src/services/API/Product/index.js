import axios from "../../axios";

const Product = {
	fetchAll() {
		return axios.request({
			method: "GET",
			url: "/product",
		});
	},
	fetchBySlug(slug) {
		return axios.request({
			method: "GET",
			url: `/product/${slug}`,
		});
	},
};

export default Product;
