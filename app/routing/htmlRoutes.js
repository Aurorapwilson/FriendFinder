// Dependencies
var express = require('express');
var path = require('path');

// Set router to express function
var router = express.router();

// Sets the route for the home page
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

// Sets the route for the about page
router.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});

// Exports the variable
module.exports = router;
