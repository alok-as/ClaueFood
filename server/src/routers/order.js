const express = require("express");
const { placeOrder, updateOrderById } = require("../controllers/order");

const router = express.Router();

router.post("/", placeOrder);
router.patch("/:id", updateOrderById);

module.exports = router;
