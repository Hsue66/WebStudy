var express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground",campgroundSchema);

/*
Campground.create(
  {name:"hello", image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f4c270a3e8b3b1_340.jpg",
  description:" sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incriatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}, function(err, campground){
    if(err)
      console.log(err);
    else {
      console.log("NEWLY CREATED CAMPGOUND: ");
      console.log(campground);
    }
  }
);
*/

app.get("/",function(req,res){
  res.render("landing");
});

app.get("/campgrounds",function(req,res){
  Campground.find({}, function(err,campgrounds){
    if(err)
      console.log(err);
    else {
      res.render("index",{campgrounds : campgrounds});
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

app.get("/campgrounds/:id", function(req,res){
  res.render("show");
});

app.listen(3000,function(){
  console.log("the YelpCamp Server Has Started!!!");
});
