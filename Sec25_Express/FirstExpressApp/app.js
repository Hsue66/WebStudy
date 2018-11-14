var express = require("express");
var app = express();

app.get("/",function(req,res){
  res.send("Hi there!");
});

app.get("/bye",function(req,res){
  res.send("Goodbye");
});

app.get("/dog",function(req,res){
  console.log("dog was called");
  res.send("MEOW!");
});

app.get("/r/:subredditName",function(req, res){
  var subreddit = req.params.subredditName.toUpperCase();
  res.send("Welcome to "+subreddit);
});

app.get("/r/:subredditName/comments/:id/:titles",function(req, res){
  console.log(req.params);
  res.send("Welcome to comment page");
});

app.get("*",function(req,res){
  res.send("Wrong Page");
});

app.listen(3000,function(){
  console.log("Server is running");
});
