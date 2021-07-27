const express = require("express");
const orderController = require("../controllers/order");

const router = express.Router();

router.post("/", orderController.placeOrder);
router.patch("/:id", orderController.updateOrderById);

module.exports = router;
