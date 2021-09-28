var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Client = mongoose.model('Client');
var User = mongoose.model('User');
var Product = mongoose.model('Product');

var orders = new Schema({
    date: String,
    hour: String,
    products: [{ type: Schema.ObjectId, ref: "Product" }],
    clientId: { type: Schema.ObjectId, ref: "Client" },
    userId: { type: Schema.ObjectId, ref: "User"},
    typeOrder : { type: String, enum : ['Take Away', 'Delivery', 'In Place']},
})

module.exports = mongoose.model('Order', orders)
