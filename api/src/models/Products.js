const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  price: { type: Number, required: true },
  name: { type: String, required: true },
  productType: { type: String, required: true },
  codigo: { type: Number },
});

module.exports = mongoose.model("Product", ProductSchema);
