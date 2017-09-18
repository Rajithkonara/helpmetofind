var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/",function(req,res){
  res.render("landing");
});

app.get("",function(req,res){
    var findus=[
        {name: "Tommy",breed: "German Shephard",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Buck_The_GSD.jpg/170px-Buck_The_GSD.jpg"},
        {name: "Rega", breed:"Rottweiler",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%22Prince%22_%287369763074%29.jpg/200px-%22Prince%22_%287369763074%29.jpg"}
    ]
});

app.listen(3000,function(){
    console.log("Yeay server is working");
});