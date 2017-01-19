// Dependencies
var friends = require('../data/friends.js');

// Export the function
modules.exports = function(app) {
	// Sets the get for the api/friends route
	app.get('/api/friends', function(req, res) {
	    res.json(friends);
	});

	// Set the post for the api/friends route
	app.post('/api/friends', function(req, res) {
	    friends.push(req.body);
	});
}
