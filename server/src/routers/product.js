const express = require("express");
const {
	createProduct,
	fetchAllProducts,
	fetchProductById,
} = require("../controllers/product");

const router = express.Router();

router.post("/", createProduct);
router.get("/", fetchAllProducts);
router.get("/:id", fetchProductById);

module.exports = router;
