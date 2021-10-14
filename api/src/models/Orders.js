const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  date: { type: String, required: true },
  hour: { type: String, required: true },
  nameClient: { type: String },
  directionClient: { type: String },
  phoneClient: { type:Number },
  orderNumber: { type: Number, required: true },
  tableNumber: { type: Number },
  products: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      amount: { type: Number, required: true },
      observations: { type: String },
      prodState: { type: Number, default: 0 },
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
  totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Order", OrderSchema);
