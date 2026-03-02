const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");

app.use(
    session({
         secret: "mysupersecretsting",
        resave:false,
         saveUnintialized: true,
        })
    );

    app.get("/reqcount",(req,res)=>{
        if(res.session.count){
            req.session.count++;
        }else{
            req.session.count = 1;
        }
        
        res.send(`you sent a request ${req.session.count} times`);
    });



//app.get("/test",(req,res)=>{
  //  res.send("test successful!");
//});

app.listen(3000,()=>{
    console.log("server is listing to 3000");
});