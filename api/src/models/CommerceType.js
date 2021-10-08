const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommerceTypeSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("CommerceType", CommerceTypeSchema);
