const express = require("express");
const router = express.Router();
const { isLoggedIn, isOwner } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/'})

/* GET home page. */
router.get("/", listingController.index);

router
  .route("/listings")
  .get(listingController.redirectRoot)
  //Create Route
  .post(isLoggedIn, listingController.createListing);
  // .post(upload.single('listing[image]') ,(req,res) => {
  //   res.send(req.file)
  // })

//New Route
router.get("/listings/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/listings/:id")
  //Show Route
  .get(listingController.showListing)
  // Update Route
  .put(isLoggedIn, isOwner, listingController.updateListing)
  //Delete Route
  .delete(isLoggedIn, isOwner, listingController.deleteListing);

// Edit Route
router.get(
  "/listings/:id/edit",
  isLoggedIn,
  isOwner,
  listingController.renderEditForm
);

module.exports = router;
