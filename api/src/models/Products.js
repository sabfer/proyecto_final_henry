var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProductsType = mongoose.model("ProductsType");

var products = new Schema({
  price: { type: Number, required: true },
  name: { type: String, required: true },
  productType: { type: Schema.ObjectId, ref: "ProductsType", required: true }
});

module.exports = mongoose.model("Product", products);
