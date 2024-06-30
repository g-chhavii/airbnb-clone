const express = require("express");
const router = express.Router();
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

router.route("/signup")
//render signup form
.get( userController.renderSignupForm)
//sign up
.post(userController.signUp);


router.route("/login")
//render login form
.get(userController.renderLoginForm)
//login
.post(savedRedirectUrl,

  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),

  userController.login
);

//Logout
router.get("/logout", userController.logout);

module.exports = router;
