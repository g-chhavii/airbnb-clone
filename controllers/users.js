const User = require("../models/user");

module.exports.renderSignupForm = (req, res, next) => {
  res.render("signup");
};

module.exports.signUp = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);

    req.login(registeredUser, (err) => {
      if (err) {
        next(err);
      }
      req.flash("success", "successfully signed in");
      res.redirect("/");
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/signup");
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("login");
};

module.exports.login = async (req, res) => {
  req.flash("success", "Welcome to your profile");
  let redirectUrl = res.locals.redirectUrl || "/";
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }
    req.flash("success", "you've been logged out");
    res.redirect("/");
  });
};
