require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const engine = require('ejs-mate');
const User = require('./models/user.js');
const Listing = require('./models/listing.js');
const MongoStore = require('connect-mongo');
const dbUrl = process.env.ATLASDB_URL; 

async function main() {
  await mongoose.connect(dbUrl);
}

main()
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));

const wrapAsync = (fn) => {
  return function(req, res, next) {
    fn(req, res, next).catch(next);
  }
}

const app = express();
app.engine('ejs', engine);

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error" , () => {
  console.log("ERROR IN SESSION STORE" , error);
})

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  }
};


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session(sessionOptions));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.currUser = req.user;
  next();
});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const reviewRouter = require('./routes/review');
const { error } = require('console');

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', reviewRouter);

app.get('/listings/:id', wrapAsync(async (req, res, next) => {
  const listing = await Listing.findById(req.params.id).populate('owner').populate('reviews');
  if (!listing) {
    req.flash('error', 'Listing not found');
    return res.redirect('/listings');
  }
  console.log(listing); // Debugging log
  res.render('show', { listing });
}));

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

module.exports = app;
