const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the review schema
const reviewSchema = new Schema({
  comment:{
    type: String,
  } ,
  name:{
    type: String,
  } ,
  rating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5'],
    required: [true, 'Rating is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

// Create the review model
const Review = mongoose.model('Review', reviewSchema);

// Export the review model
module.exports = Review;
