const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orders = new Schema({
  date: { type: Date, required: true },
  products: [{ type: Schema.ObjectId, ref: "Product", required: true }], // ver tema precios
  clientId: { type: Schema.ObjectId, ref: "Client", required: true }, // no asociar
  userId: { type: Schema.ObjectId, ref: "User", required: true }, // no asociar
  typeOrder: {
    type: String,
    enum: ["Take Away", "Delivery", "In Place"],
    required: true,
  },
});

module.exports = mongoose.model("Order", orders);
