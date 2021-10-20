const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductInvSchema = new Schema({
  name: { type: String, required: true },
  cant: { type: Number, required: true },
  price: { type: Number, required: true },
  prodInvType: { type: String, required: true },
  proveeType: { type: String, required: true },
  fecha: { type: String, required: true },
});

module.exports = mongoose.model("ProductInv", ProductInvSchema);
