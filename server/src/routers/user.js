const express = require("express");
const userController = require("../controllers/user");
const { isAuthenticated, isAuthorized } = require("../middlewares/auth");

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

router.post("/wishlist/:productId", userController.addProductToUserWishlist);
router.get("/wishlist", userController.fetchUserWishlist);

router.post("/cart/:productId", userController.addProductToUserCart);
router.get("/cart", userController.fetchUserCart);

router.get("/tokens/:userId", userController.issueAuthenticationTokens);
router.get("/", isAuthenticated, userController.fetchUserDetails);

module.exports = router;
