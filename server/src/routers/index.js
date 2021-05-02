const express = require("express");
const userRouter = require("./user");
const productRouter = require("./product");
const reviewRouter = require("./review");
const orderRouter = require("./order");

const router = express.Router();

router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/review", reviewRouter);
router.use("/order", orderRouter);

module.exports = router;
