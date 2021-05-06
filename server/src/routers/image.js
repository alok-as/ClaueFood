const express = require("express");
const { uploadImageForProduct } = require("../controllers/image");
const uploader = require("../../config/multer");

const router = express.Router();

router.post("/:productId", uploader.single("image"), uploadImageForProduct);

module.exports = router;
