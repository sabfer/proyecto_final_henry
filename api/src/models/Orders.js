const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const OrderSchema = new Schema(
  {
    date: { type: Date, required: true },
    products: [
      {
        product: { type: Schema.ObjectId, ref: "Product" },
        cantidad: { type: Number },
      },
    ],
    clientId: { type: Schema.ObjectId, ref: "Client" }, //required: true
    userId: { type: Schema.ObjectId, ref: "User" }, //required: true
    typeOrder: {
      type: String,
      enum: ["Take Away", "Delivery", "Salon"],
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

OrderSchema.virtual("totalPrice").get(function () {
  return this.products.reduce(function (prev, actual) {
    return prev + actual.product.price * actual.cantidad;
  }, 0);
});

module.exports = mongoose.model("Order", OrderSchema);
