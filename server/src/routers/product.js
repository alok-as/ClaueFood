const express = require("express");
const {
	createProduct,
	fetchAllProducts,
	fetchProductBySlug,
} = require("../controllers/product");

const router = express.Router();

router.post("/", createProduct);
router.get("/", fetchAllProducts);
router.get("/:slug", fetchProductBySlug);

module.exports = router;
