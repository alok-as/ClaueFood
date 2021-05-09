const express = require("express");
const {
	createProduct,
	fetchAllProducts,
	fetchProductBySlug,
	deleteProductById,
} = require("../controllers/product");

const router = express.Router();

router.post("/", createProduct);
router.get("/", fetchAllProducts);
router.get("/:slug", fetchProductBySlug);
router.delete("/:id", deleteProductById);

module.exports = router;
