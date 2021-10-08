const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MesaSchema = new Schema({
    numero: { type: Number, required: true },
});

module.exports = mongoose.model("Mesa", MesaSchema);
