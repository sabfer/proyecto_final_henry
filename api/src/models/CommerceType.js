var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommerceTypeSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("CommerceType", CommerceTypeSchema);
