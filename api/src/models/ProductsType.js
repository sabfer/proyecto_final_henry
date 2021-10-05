var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductsTypeSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("ProductsType", ProductsTypeSchema);
