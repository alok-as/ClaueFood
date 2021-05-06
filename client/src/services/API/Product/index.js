import axios from "../../axios";

const Product = {
	fetchAll() {
		return axios.request({
			method: "GET",
			url: "/product",
		});
	},
	fetchById({ id }) {
		return axios.request({
			method: "GET",
			url: `/product/${id}`,
		});
	},
};

export default Product;
