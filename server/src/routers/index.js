const express = require("express");
const userRouter = require("./user");
const productRouter = require("./product");
const reviewRouter = require("./review");

const router = express.Router();

router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/review", reviewRouter);

module.exports = router;
