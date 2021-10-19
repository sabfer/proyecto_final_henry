const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsTypeSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: Schema.ObjectId, ref: "User" },
});

module.exports = mongoose.model("ProductsType", ProductsTypeSchema);
