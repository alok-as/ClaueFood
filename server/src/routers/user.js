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
	passport.authenticate("jwt", { session: false }),
	fetchUserDetails
);

router.get(
	"/google-login",
	passport.authenticate("google", { scope: ["profile"] })
);

module.exports = router;
