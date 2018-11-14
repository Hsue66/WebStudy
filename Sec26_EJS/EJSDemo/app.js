var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
  res.render("home");
});

app.get("/fallinlovewith/:thing",function(req,res){
  var thing = req.params.thing;
  res.render("fall",{thingVar: thing});
});

app.get("/posts", function(req,res){
  var posts = [
    {title: "Wow", author:"wow"},
    {title: "Opps", author:"ops"},
    {title: "Aha", author:"aha"},
  ];
  res.render("post",{posts:posts});
});

app.listen(3000,function(){
  console.log("Server has started!!!");
});
