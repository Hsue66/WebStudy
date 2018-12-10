var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.render("landing");
});

var campgrounds = [
  {name:"Seulak", img:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f4c270a3e8b3b1_340.jpg"},
  {name:"Kwanak", img:"https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144591f3c87da2ebbc_340.jpg"},
  {name:"Hanla", img:"https://pixabay.com/get/e83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104491f4c270a3e8b3b1_340.jpg"},
];

app.get("/campgrounds",function(req,res){
  res.render("campgrounds",{campgrounds : campgrounds});
});

app.post("/campgrounds",function(req,res){
  var name = req.body.name;
  var img = req.body.img;
  var newCampground = {name: name, img: img};
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
    res.render("new");
});

app.listen(3000,function(){
  console.log("the YelpCamp Server Has Started!!!");
});
