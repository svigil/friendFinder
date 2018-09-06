// create npms required
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var router = require("./app/routing/htmlRoutes");
var api = require("./app/routing/apiRoutes");
var friends = require("./app/data/friends");

var app = express();

// Listening to the PORT

var PORT = process.env.PORT || 3000;

// set up the express app to handle data parsing

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("app"));

// direct to the correct API

app.use("/friends", api);

app.use("/", router);

// Confirm app is listeing on the PORT

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});