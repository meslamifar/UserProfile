// server.js
// set up web server ========================
/* jshint undef: true, unused: true, node: true */

var express  = require('express');
var app      = express();  // create our app w/ express
var port     = 8080;
var userprofile = require('./api/userprofile-services.js');

//the express.static middleware function to start serving the files directly
app.use(express.static('public'));
app.use(express.static('node_modules/angular'));
app.use(express.static('node_modules/angular-resource'));
//the main application page
app.get('/', function(req, res) {
  res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

//returns whaever passed into the service
app.route("/api/userprofile/:input")
    .get(userprofile.getInput);


//listening to port 8080
app.listen(port);
