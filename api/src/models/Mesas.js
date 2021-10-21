const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MesaSchema = new Schema({
  tableNumber: { type: Number, required: true },
  isOccupated: { type: Boolean, default: false },
  userId: { type: Schema.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Mesa", MesaSchema);
