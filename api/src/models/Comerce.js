var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = mongoose.model("Users");
var TypeComerce = mongoose.model("ComerceType");

var ComerceSchema = new Schema({
  idUser: { type: Schema.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  direction: { type: String },
  typeComerce: { type: Schema.ObjectId, ref: "TypeComerce", required: true },
  cuit: { type: String },
  razonSocial: { type: String },
});

module.exports = mongoose.model("Comerce", ComerceSchema);
