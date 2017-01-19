// Dependencies
var express = require('express');
var path = require('path');
var friends = require('../data/friends.js');

// Set router to express function
var router = express.router();

// Sets the get for the api/friends route
router.get('/api/friends', function(req, res) {
    res.json(friends);
});

// Set the post for the api/friends route
router.post('/api/friends', function(req, res) {
    friends.push(req.body);
});

// Exports the variable
module.exports = router;
