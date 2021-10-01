var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productsType = new Schema({
    name: { type: String, required: true },
});

module.exports = mongoose.model("ProductsType", productsType);