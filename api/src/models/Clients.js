const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ClientSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  direction: { type: String, required: true },
});

module.exports = mongoose.model("Client", ClientSchema);
