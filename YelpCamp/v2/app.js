var express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/yelp_camp");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground",campgroundSchema);


/*Campground.create(
  {name:"Seulak", image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f4c270a3e8b3b1_340.jpg"}, function(err, campground){
    if(err)
      console.log(err);
    else {
      console.log("NEWLY CREATED CAMPGOUND: ");
      console.log(campground);
    }
  }
);*/

app.get("/",function(req,res){
  res.render("landing");
});

app.get("/campgrounds",function(req,res){
  Campground.find({}, function(err,campgrounds){
    if(err)
      console.log(err);
    else {
      res.render("campgrounds",{campgrounds : campgrounds});
    }
  });
});

app.post("/campgrounds",function(req,res){
  var name = req.body.name;
  var img = req.body.img;
  var newCampground = {name: name, image: img};
  Campground.create(newCampground, function(err, campground){
    if(err)
      console.log(err);
    else{
      res.redirect("/campgrounds");
    }
  });
});

app.get("/campgrounds/new",function(req,res){
    res.render("new");
});

app.listen(3000,function(){
  console.log("the YelpCamp Server Has Started!!!");
});
