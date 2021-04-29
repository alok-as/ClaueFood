const express = require("express");
const passport = require("passport");

const {
	registerUser,
	loginUser,
	fetchUserDetails,
} = require("../controllers/user");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

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
