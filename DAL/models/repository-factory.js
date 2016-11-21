

module.exports.getRepository = function(entityname){
var userprofilemodel = require('./userprofile.js');
  // When successfully connected

return {
  get: function(res){
    userprofilemodel.find({},function(err, users) {
          if (err) throw err;
          return res.json(users);
        });
      },
  getById: function(req, res){

    userprofilemodel.findOne({ "username" : req.params.userprofileId }, (err, users) => {
        if(err) res.send({"OK": false, "error": err});
        //If no errors, send it back to the client
        res.json({ "data": users });
    });
  },
  create: function(req, res){
    var username = req.body.userprofileId;
    var submissions= req.body.submissions;
    var city = req.body.city;
    userprofilemodel.create({"username":username,"city": city,"submissions": submissions}, (err, users) => {
      if (err)
        res.json({"OK": false, "error": err});
      else
        res.json({"OK": true, "data": {"_id":users._id, "username":users.username, "city": users.city, "submissions": users.submissions}});
    });
  },
  update: function(req, res){
    var username = req.params.userprofileId;
    var submissions= req.body.submissions;
    var city = req.body.city;
    userprofilemodel.findOneAndUpdate({"username":username}, {"username":username,"city": city,"submissions": submissions}, { "new": true}, function(err, users){
      if (err) throw err;
      return res.json({"OK": true, "data": {"_id":users._id, "username":users.username, "city": users.city, "submissions": users.submissions}});
    });
  }
}
}
