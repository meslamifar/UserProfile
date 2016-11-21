//returns whaever passed into the service
var userprofile = require('./userprofile-services.js');
module.exports = function(app, dirname){


  app.route("/api/input/:input")
    .get(userprofile.getInput);

  app.route("/api/userprofile/:userprofileId")
    .get(userprofile.getUserProfileById)
    .put(userprofile.updateUserProfile);

  app.route("/api/userprofile")
    .post(userprofile.createUserProfile);

  app.get("*", function(req, res) {
      res.sendFile( dirname + '/public/index.html'); // load our public/index.html file
      });


  }
