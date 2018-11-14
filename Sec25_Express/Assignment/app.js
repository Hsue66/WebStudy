var express = require("express");
var app = express();

app.get("/",function(req,res){
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal",function(req,res){
  //var sound = {'pig':'Oink','cow':'Moo'};
  //console.log(sound['pig']);
  var AnimalSounds = new Map();
  var animals = ["pig","cow","dog","cat","sheep"];
  var sounds = ["Oink","Moo","Woof Woof","Meow","Meeee"];
  for(var i=0; i<animals.length; i++)
    AnimalSounds.set(animals[i],sounds[i]);

  res.send("The "+req.params.animal+" says '"+AnimalSounds.get(req.params.animal)+"'");
});

app.get("/repeat/:str/:times",function(req,res){
  var times = req.params.times;
  var str = req.params.str;

  var string = '';
  for(var i=0; i<parseInt(times,10); i++)
    string += str + ' ';

  res.send(string);
});

app.get("*",function(req,res){
  res.send("Sorry page not found... What are you doing with your life?");
});

app.listen(3000,function(){
  console.log("Server has started!!!");
});
