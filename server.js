// create npms required
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var router = require("./app/routing/htmlRoutes");
var api = require("./app/routing/apiRoutes");
var friends = require("./app/data/friends");

var app = express();

// Listening to the port

var port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("app"));

app.use("/friends", api);

app.use("/", router);

app.listen(port, function () {
    console.log("App listening on port " + port);
});