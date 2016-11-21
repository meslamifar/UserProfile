// server.js
// set up web server ========================
/* jshint undef: true, unused: true, node: true */

//modules
var express  = require('express');
var app      = express();  // create our app w/ express
var bodyParser = require('body-parser');
var port     = 8080;
var userprofile = require('./api/userprofile-services.js');

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/user_profile');

app.use(bodyParser.json());
//the express.static middleware function to start serving the files directly
app.use(express.static(__dirname + '/public'));
require('./api/routes.js')(app, __dirname);
//the main application page


//listening to port 8080
app.listen(port);
module.exports = app;
