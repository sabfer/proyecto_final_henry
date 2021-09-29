var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var products = new Schema({
  price: { type: Number, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("Product", products);
