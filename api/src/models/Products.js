var mongoose = require("mongoose");
var Schema = mongoose.Schema;
/* const CommerceId = mongoose.model("Commerce"); */

var products = new Schema({
  price: { type: Number, required: true },
  name: { type: String, required: true },
  productType: { type: String, required: true },
  /* commerceId: { type: Schema.ObjectId, ref: "Commerce", required: true } */
});

module.exports = mongoose.model("Product", products);
