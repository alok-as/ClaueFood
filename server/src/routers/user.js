const express = require("express");
const passport = require("passport");

const userController = require("../controllers/user");
const { isAuthenticated, isAuthorized } = require("../middlewares/auth");
const { calculateAuthTokenExpiration } = require("../utils");

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

router.post("/wishlist/:productId", userController.addProductToUserWishlist);
router.get("/wishlist", userController.fetchUserWishlist);

router.post("/cart/:productId", userController.addProductToUserCart);
router.get("/cart", userController.fetchUserCart);

//OAUTH
router.get(
	"/google-login",
	passport.authenticate("google-strategy", {
		scope: [
			`${process.env.GOOGLE_INFO_BASE_URL}.profile`,
			`${process.env.GOOGLE_INFO_BASE_URL}.email`,
		],
		accessType: "offline",
		prompt: "consent",
	})
);

router.get(
	"/google/callback",
	passport.authenticate("google-strategy", {
		failureRedirect: "/",
	}),
	userController.loginUserWithGoogle
);

router.get("/facebook-login", passport.authenticate("facebook-strategy"));

router.get(
	"/facebook/callback",
	passport.authenticate("facebook-strategy", {
		failureRedirect: "/",
		successRedirect: "http://localhost:3000",
	})
);

router.get("/tokens/:userId", userController.issueAuthenticationTokens);
router.get("/", isAuthenticated, userController.fetchUserDetails);

module.exports = router;
