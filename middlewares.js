module.exports.isLoggedIn = (req,res,next)=>{
    
     if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","you must be logged in to create listing");
         return res.redirect("/login");
    }
    next();
}

module.exports.savedRedirectUrl = (req,res,next)=>{
    if(req.session.redirectedUrl) {
        res.locals.redirectUrl = req.session.RedirectUrl;
    }
    next();
}