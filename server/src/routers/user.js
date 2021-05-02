const express = require("express");
const passport = require("passport");

const {
	registerUser,
	loginUser,
	fetchUserDetails,
	addProductToUserWishlist,
	fetchUserWishlist,
} = require("../controllers/user");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/wishlist", addProductToUserWishlist);
router.get("/wishlist", fetchUserWishlist);

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
