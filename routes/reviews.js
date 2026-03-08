const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const   Reviews = require("../models/review.js");
const   Listing = require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middlewares.js")


//reviews
//post route
router.post("/",isLoggedIn, validateReview,wrapAsync( async (req,res)=>{
    console.log(req.params.id);
    let listing = await Listing.findById(req.params.id);
    let newReview = new Reviews(req.body.review);
    newReview.authore = req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
}));

//delete review
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(async(req,res)=>{
        let { id, reviewId} = req.params;

        await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
         await Review.findByIdAndDelete(reviewId);

         res.redirect(`/listings/${id}`);

    })
);

module.exports = router;