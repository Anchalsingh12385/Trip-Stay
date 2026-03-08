const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const   Reviews = require("../models/review.js");
const   Listing = require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middlewares.js")
const reviewController = require("../controllers/review.js");

//reviews
//post route
router.post("/",isLoggedIn, validateReview,wrapAsync(reviewController.createReview));

//delete review
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.deleteReview)
);

module.exports = router;