const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview =  async (req,res)=>{
    console.log(req.params.id);
    let listing = await Listing.findById(req.params.id);
    let newReview = new Reviews(req.body.review);
    newReview.authore = req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
};
module.exports.deleteReview = async(req,res)=>{
        let { id, reviewId} = req.params;

        await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
         await Review.findByIdAndDelete(reviewId);

         res.redirect(`/listings/${id}`);

    };