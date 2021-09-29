var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var clients = new Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  direction: { type: String, required: true },
});

module.exports = mongoose.model("Client", clients);
