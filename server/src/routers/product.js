const express = require("express");
const productController = require("../controllers/product");
const { isAuthenticated } = require("../middlewares/auth");
const { cache } = require("../middlewares/redis-cache");

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.fetchAllProducts);

router.get(
	"/:slug",
	isAuthenticated,
	cache("Product successfully fetched"),
	productController.fetchProductBySlug
);

router.delete("/:id", productController.deleteProductById);

module.exports = router;
