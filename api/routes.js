//returns whaever passed into the service
var userprofile = require('./userprofile-services.js');
module.exports = function(app){

  app.route("/api/userprofile/:input")
    .get(userprofile.getInput);

  app.route("/api/userprofile/userprofileId=:userprofileId")
    .get(userprofile.getUserProfile)
    .post(userprofile.createUserProfile)
    .put(userprofile.updateUserProfile);

  app.get("*", function(req, res) {
      res.sendFile('C:/Users/Mahshad/Desktop/UserProfile/public/index.html'); // load our public/index.html file
      });


  }
