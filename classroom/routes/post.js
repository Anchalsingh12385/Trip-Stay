const express = require("express");
const router = express.Router();

//Index -post
router.get("/",(req,res)=>{
    res.send("GET for posts");
});
//Show -post
router.get("/:id",(req,res)=>{
    res.send("GET for postid");
});
//post -posts
router.post("/",(req,res)=>{
    res.send("POST for posts");
});
//Delete - posts
router.delete("/:id",(req,res)=>{
    res.send("DELETE for post id");
});

module.exports = router;