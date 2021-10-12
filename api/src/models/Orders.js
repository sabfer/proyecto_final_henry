const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    date: { type: String, required: true},
    hour: { type: String, required: true},
    orderNumber: { type: Number, required: true },
    tableNumber: { type: Number },
    totalPrice: { type: Number, required: true},
    products: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        amount: { type: Number, required: true },
        observations: { type: String },
      },
    ],
    clientId: { type: Schema.ObjectId, ref: "Client" }, //required: true
    userId: { type: Schema.ObjectId, ref: "User" }, //required: true
    type: {
      type: String,
      enum: ["Take Away", "Delivery", "Salon"],
      required: true,
    },
    estado: {
      type: String,
      enum: ["Pendiente", "En progreso", "Finalizada"],
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Order", OrderSchema);
