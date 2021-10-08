const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MesaSchema = new Schema({
  tableNumber: { type: Number, required: true },
  isOccupated: { type: Boolean, default: false },
});

module.exports = mongoose.model("Mesa", MesaSchema);
