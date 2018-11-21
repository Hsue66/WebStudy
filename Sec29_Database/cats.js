var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat",catSchema);

/*
var george = new Cat({
  name: "Horang",
  temperament: "Independent"
});

george.save(function(err,cat){
  if(err){
    console.log("SOMETHING WENT WRONG!");
    console.log(err);
  }else{
    console.log("WE JUST SAVED A CAT TO THE DB: ");
    console.log(cat);
  }
});
*/
Cat.create({
  name: "Munzi",
  age: 1,
  temperament: "Bland"
},function(err,cat){
  if(err){
    console.log("FAIL TO CREATE AND SAVE");
    console.log(err);
  }else{
    console.log("SUCCESS");
    console.log(cat);
  }
});

Cat.find({},function(err,cats){
  if(err){
    console.log("OH NO");
    console.log(err);
  }else{
    console.log("ALL THE CATS I HAVE IN MY DB :");
    console.log(cats);
  }
});
