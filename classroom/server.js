const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");


app.get("/",(req,res)=>{
    res.send("Hi,I am root!");
});

app.use("/users",users);
app.use("/posts",posts);

//Index -users
app.get("/users",(req,res)=>{
    res.send("GET for users");
});
//Show -users
app.get("/users/:id",(req,res)=>{
    res.send("GET for userid");
});
//post -users
app.post("/users",(req,res)=>{
    res.send("POST for users");
});
//Delete -users
app.delete("/users/:id",(req,res)=>{
    res.send("DELETE for user id");
});

//Index -post
app.get("/posts",(req,res)=>{
    res.send("GET for posts");
});
//Show -post
app.get("/posts/:id",(req,res)=>{
    res.send("GET for postid");
});
//post -posts
app.post("/posts",(req,res)=>{
    res.send("POST for posts");
});
//Delete - posts
app.delete("/posts/:id",(req,res)=>{
    res.send("DELETE for post id");
});




app.listen(3000,()=>{
    console.log("server is listing to 3000");
});