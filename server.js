
// server.js

// set up web server ========================
var express  = require('express');
var app      = express();                               // create our app w/ express

// application -------------------------------------------------------------
app.get('*', function(req, res) {
  res.sendfile('./Dashboard/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

//listening to port 8080
app.listen(8080);
