// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("../data/friends")

// Sets up express app
var app = express();
var router = new express.Router();

// 
router.get("/", function (req, res) {
    return res.json(friends);
});

router.get("/:friend", function (req, res) {
    var chosen = req.params.friend;

    console.log(chosen);

    for (var i = 0; i < friends.length; i++) {
        if (chosen === friends[i].routeName) {
            return res.json(friends[i]);
        }
    }

    return res.json(false);
});

router.post("/", function (req, res) {

    var userInput = req.body;

    userInput.routeName = userInput.name.replace(/\s+/g, "").toLowerCase();
    var totalArr = [];
    for (i = 0; i < friends.length; i++) {
        score1 = userInput.scores;
        score2 = friends[i].scores;
        var total = 0;
        for (j = 0; j < 10; j++) {
            total += Math.abs(parseInt(score1[j]) - score2[j]);
        };
        totalArr.push(total);
    };
    friends.push(req.body);
    console.log(friends);
    var lowNum = Math.min.apply(null, totalArr);
    var match = totalArr.indexOf(lowNum);
    res.json(friends[match]);
});

module.exports = router;