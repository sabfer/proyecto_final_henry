const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommerceSchema = new Schema({
  userId: { type: Schema.ObjectId, ref: "User" },
  typeCommerceId: {
    type: Schema.ObjectId,
    ref: "CommerceType",
  },
  name: { type: String, required: true },
  phone: { type: Number },
  direction: { type: String },
  cuit: { type: Number },
  razonSocial: { type: String },
});

module.exports = mongoose.model("Commerce", CommerceSchema);
