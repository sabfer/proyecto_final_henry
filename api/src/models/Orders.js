var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Client = mongoose.model("Client");
var User = mongoose.model("User");
var Product = mongoose.model("Product");

var orders = new Schema({
  date: { type: Date, required: true },
  products: [{ type: Schema.ObjectId, ref: "Product", required: true }],
  clientId: { type: Schema.ObjectId, ref: "Client", required: true },
  userId: { type: Schema.ObjectId, ref: "User", required: true },
  typeOrder: {
    type: String,
    enum: ["Take Away", "Delivery", "In Place"],
    required: true,
  },
});

module.exports = mongoose.model("Order", orders);
