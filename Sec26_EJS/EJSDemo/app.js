var express = require("express");
var app = express();

app.get("/",function(req,res){
  res.render("home.ejs");
});

app.get("/fallinlovewith/:thing",function(req,res){
  var thing = req.params.thing;
  res.render("fall.ejs",{thingVar: thing});
});

app.get("/posts", function(req,res){
  var posts = [
    {title: "Wow", author:"wow"},
    {title: "Opps", author:"ops"},
    {title: "Aha", author:"aha"},
  ];
  res.render("post.ejs",{posts:posts});
});

app.listen(3000,function(){
  console.log("Server has started!!!");
});
