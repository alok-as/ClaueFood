const express = require("express");
const { isAuthenticated } = require("../middlewares/auth");
const paymentController = require("../controllers/payments");

const router = express.Router();
router.get("/", isAuthenticated, paymentController.generatePayment);
router.post("/captured", isAuthenticated, paymentController.capturePayment);

module.exports = router;
