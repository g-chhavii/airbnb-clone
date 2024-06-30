const Listing = require('../models/listing');
const Review = require('../models/review');

module.exports.addReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash('error', 'Listing not found');
    return res.redirect('/listings');
  }

  const { rating, comment } = req.body.review;

  // Ensure the rating is within the valid range
  if (rating < 1 || rating > 5) {
    req.flash('error', 'Rating must be between 1 and 5');
    return res.redirect(`/listings/${listing._id}`);
  }

  let newReview = new Review({
    rating,
    comment,
    author: req.user._id
  });
  
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();

  res.redirect(`/listings/${listing._id}`);
  console.log('new review saved');
}

module.exports.deleteReview = async (req, res) => {
  let { id, reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  res.redirect(`/listings/${id}`);
}
