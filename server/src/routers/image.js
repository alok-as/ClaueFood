const express = require("express");
const imageController = require("../controllers/image");
const uploader = require("../../config/multer/cloud");

const router = express.Router();

router.post(
	"/:productId",
	uploader.single("image"),
	imageController.uploadImageForProduct
);

module.exports = router;
