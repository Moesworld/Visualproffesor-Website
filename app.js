//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const path = require("path");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/Home.html")
});

app.get("/films", function(req,res){
  res.sendFile(__dirname + "/films.html");
});

app.get("/photo", function(req,res){
  res.sendFile(__dirname + "/photo.html");
});

app.post("/contact",function(req,res){
    console.log(req.body.NameofPerson);
    console.log(req.body.EmailOfPerson);
    console.log(req.body.MessageOfPerson);
});

app.get("/contact", function(req,res){
  res.sendFile(__dirname + "/contact.html");
});

app.post("/", function(req,res){

});


app.listen(3000,function(){
  console.log("Server Listening")
});
