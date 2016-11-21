var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserProfileSchema = new Schema({
    username: { type: String, required: true, unique: true },
    city: { type: String, required: false },
    createdAt: { type: Date, required: false },
    updatedAt: { type: Date, required: false },
    submissions: { type: Array, required: false}
  },
  {
    versionKey: false
  }
);

UserProfileSchema.pre('save', function (next) {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  else {
    this.updatedAt = now;
  }
  next();
});

var userprofile = mongoose.model('users', UserProfileSchema);
module.exports = userprofile;
