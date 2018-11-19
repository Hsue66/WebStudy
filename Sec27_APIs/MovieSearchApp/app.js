var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/",function(req,res){
  res.render("search");
});

app.get('/results',function(req,res){
  var searchTitle = req.query.title;
  var url = 'http://www.omdbapi.com/?apikey=thewdb&s='+searchTitle;
  request(url,function(error,response,body){
    if(!error && response.statusCode === 200){
      var data = JSON.parse(body);
      res.render("result",{data:data});
    }
  });
});

app.listen(3000,function(){
  console.log("Movie App Server started!!!");
});
