const express = require("express");
const userRouter = require("./user");
const productRouter = require("./product");
const reviewRouter = require("./review");
const orderRouter = require("./order");
const imageRouter = require("./image");
const paymentsRouter = require("./payments");

const router = express.Router();

router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/review", reviewRouter);
router.use("/order", orderRouter);
router.use("/image", imageRouter);
router.use("/payments", paymentsRouter);

module.exports = router;
