var mongoose = require('mongoose')
var Schema = mongoose.Schema

var products = new Schema({
    price:  Number,
    type: String,
})

module.exports = mongoose.model('Product', products)