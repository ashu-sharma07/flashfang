// Required modules imported

const express = require("express");
const bodyParser = require("body-parser");

// Inital App Set up 
const app = express();

// Ejs Setup 
app.set('view engine', 'ejs');

// Express static files Setup
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

//  Handle get request to root route

app.get("/", function (req, res) {
  const englishWord = "Juice";
  res.render("index",{englishWord: englishWord});
});

app.get("/contact", function(req, res){
  res.render("contact");
});

app.get("/about", function(req, res){
  res.render("about");
})

app.get("/add", function(req, res){
  res.render("add");
});

// Handling post request

app.post("/", function(req, res){
  console.log(req.body.userWord);
  res.redirect("/");
});





// Starting app on 3000

app.listen(3000, function () {
  console.log("App is running successfully on Port 3000");
});
