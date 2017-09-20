var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/images/'));

mongoose.connect("mongodb://helpus:helpus@ds139954.mlab.com:39954/helpus",{useMongoClient:true});


var findusall=[
    {name: "Tommy",breed: "German Shephard",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Buck_The_GSD.jpg/170px-Buck_The_GSD.jpg"},
    {name: "Rega", breed:"Rottweiler",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%22Prince%22_%287369763074%29.jpg/200px-%22Prince%22_%287369763074%29.jpg"},
    {name:"Lasy", breed:"bulldog",image:"http://cdn3-www.dogtime.com/assets/uploads/gallery/bulldog-dog-breed-pictures/1-threequartersitting.jpg"},
    {name:"Kitty", breed:"kittycat",image:"https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg"}
]


var findusallSchema = new mongoose.Schema({
    name: String,
    breed: String,
    image: String
});

var Findus = mongoose.model("Findus",findusallSchema);


Findus.create({
    name: "Scooby",
    breed:"Labrador",
    image:"http://cdn1-www.dogtime.com/assets/uploads/gallery/labrador-retriever-dog-breed-pictures/labrador-retriever-dog-pictures-1.jpg"
},function(err,findus){
   if(err){
       console.log(err);
   }else{
       console.log("Added your notice");
       console.log(findus);
   }
});



app.get("/",function(req,res){
  res.render("landing");
});



app.get("/findus",function(req,res){
 Findus.find({},function(err,findusall){
     if(err){
         console.log(err);
     }else{
      res.render("findus",{findusall:findusall});
     }
 });   
});

app.post("/findus",function(req,res){
 var name = req.body.name;
 var breed = req.body.breed;
 var image = req.body.image;

 var newfindus = {name:name,breed:breed,image:image};
// Create a new notice and save to DB
Findus.create(newfindus, function(err,newlyCreated){
  if(err){
      console.log(err);
  }else{
    console.log("ssdsd"+newlyCreated);
      res.redirect("/findus");
  }
});

 findusall.push(newfindus);

 //redirect back to findus page
 //res.redirect("/findus");
});





app.get("/findus/new",function(req,res){
    res.render("new");
});




app.listen(3000,function(){
    console.log("Yeay server is working");
});