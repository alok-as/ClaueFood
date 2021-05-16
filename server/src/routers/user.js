const express = require("express");
const passport = require("passport");

const {
	registerUser,
	loginUser,
	fetchUserDetails,
	addProductToUserWishlist,
	fetchUserWishlist,
	addProductToUserCart,
	fetchUserCart,
} = require("../controllers/user");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/wishlist/:productId", addProductToUserWishlist);
router.get("/wishlist", fetchUserWishlist);

router.post("/cart/:productId", addProductToUserCart);
router.get("/cart", fetchUserCart);

router.get(
	"/",
	passport.authenticate("jwt-strategy", { local: false }),
	fetchUserDetails
);

router.get(
	"/google-login",
	passport.authenticate("google-strategy", { scope: ["profile", "email"] })
);

router.get(
	"/google/callback",
	passport.authenticate("google-strategy", {
		failureRedirect: "/",
		successRedirect: "http://localhost:3000",
	})
);

router.get("/facebook-login", passport.authenticate("facebook-strategy"));

router.get(
	"/facebook/callback",
	passport.authenticate("facebook-strategy", {
		failureRedirect: "/",
		successRedirect: "http://localhost:3000",
	})
);

module.exports = router;
