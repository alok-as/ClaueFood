import axios from "../../axios";
const basePath = "/product";

const Product = {
	fetchAll({ category }) {
		let url = basePath;
		
		if (category.length) {
			switch (category) {
				case "featured":
					url = `${basePath}?isFeatured=true`;
					break;
				case "bestseller":
					url = `${basePath}?isBestseller=true`;
					break;
				case "special":
					url = `${basePath}?isFeatured=true`;
					break;
				case "latest":
					url = `${basePath}?isFeatured=true`;
					break;
				default:
					break;
			}
		}

		return axios.request({
			method: "GET",
			url,
		});
	},
	fetchBySlug(slug) {
		return axios.request({
			method: "GET",
			url: `${basePath}/${slug}`,
		});
	},
};

export default Product;
