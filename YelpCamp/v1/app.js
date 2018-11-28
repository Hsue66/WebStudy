var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.render("landing");
});

var campgrounds = [
  {name:"Seulak", img:"https://photosforclass.com/download/pixabay-1208201?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f3c27da1eabcbd_960.jpg&user=Free-Photos"},
  {name:"Kwanak", img:"https://photosforclass.com/download/pixabay-691424?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fef3cb00b2af01c22d2524518b7444795ea76e5d004b0144596f3c57fa0e4b0_960.jpg&user=Free-Photos"},
  {name:"Hanla", img:"https://photosforclass.com/download/pixabay-1845719?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104491f3c27da1eabcbd_960.jpg&user=Pexels"},
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
