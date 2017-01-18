// Dependencies
var express = require('express');
var path = require('path');
var friends = require('../data/friends.js');

// Set app to express function
var app = express();

// Sets the get for the api/friends route
app.get('/api/friends', function(req, res) {
    res.json(friends);
});

// Set the post for the api/friends route
app.post('/api/friends', function(req, res) {
    friends.push(req.body);
});

// Exports the variable
module.exports = app;
