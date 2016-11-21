
var exports = module.exports = {};
var repo = require('../DAL/models/repository-factory.js');

exports.getInput = function(req, res){
       var input = req.params.input;
       var result = { 'data' : input };
       return res.json(result);
   };


exports.getUserProfile = function(req, res){
    var userprofileRepo = repo.getRepository("user_profile");
    userprofileRepo.get(res);
};

exports.getUserProfileById = function(req, res){
    var userprofileRepo = repo.getRepository("user_profile");
    userprofileRepo.getById(req, res);
};

exports.createUserProfile = function(req, res){
    var userprofileRepo = repo.getRepository("user_profile");
    userprofileRepo.create(req, res);
};

exports.updateUserProfile = function(req, res){
  var userprofileRepo = repo.getRepository("user_profile");
  userprofileRepo.update(req, res);
};
