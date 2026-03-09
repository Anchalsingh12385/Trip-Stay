const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const   Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing} = require("../middlewares.js");
const listingController = require("../controllers/listing.js");
const multer = require("multer");
const upload = multer({ dest: 'uploads/'})
router.route("/")
   .get(wrapAsync(listingController.index))

  // .post(isLoggedIn, validateListing,wrapAsync(listingController.createListing));
 .post( upload.single('listing[image]'),(req,res)=>{
    res.send(req.file);
 });
   
   ///NEW ROUTE
router.get("/new",isLoggedIn, listingController.renderNewForm);


router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn,isOwner,wrapAsync(listingController.updateListing))
    .delete(isLoggedIn,isOwner,wrapAsync(listingController.deleteListing));
    

//EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm)); 



module.exports = router;