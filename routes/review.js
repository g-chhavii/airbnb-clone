const express = require("express");
const router = express.Router();
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js");

// Add review
router.post("/listings/:id/reviews", 
  isLoggedIn, 
  reviewController.addReview
);

// Delete review
router.delete(
  "/listings/:id/reviews/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  reviewController.deleteReview
);

module.exports = router;
