var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var users = new Schema({
  password: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  post: { type: String, required: true },
});

module.exports = mongoose.model("User", users);
