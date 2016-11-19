// server.js
// set up web server ========================
/* jshint undef: true, unused: true, node: true */

//modules
var express  = require('express');
var app      = express();  // create our app w/ express
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port     = 8080;
var userprofile = require('./api/userprofile-services.js');


app.use(bodyParser.json());
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
//the express.static middleware function to start serving the files directly
app.use(express.static(__dirname + '/public'));
require('./api/routes.js')(app);
//the main application page


//listening to port 8080
app.listen(port);
module.exports = app;
