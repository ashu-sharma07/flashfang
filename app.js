// Required modules imported

const express = require("express");
const bodyParser = require("body-parser");

// Inital App Set up 
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//  Handle get request to root route

app.get("/", function (req, res) {
  res.send("Hello World");
});

// Starting app on 3000

app.listen(3000, function () {
  console.log("App is running successfully on Port 3000");
});
