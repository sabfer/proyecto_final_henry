const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WaiterSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  direction: { type: String, required: true },
});

module.exports = mongoose.model("Waiter", WaiterSchema);
