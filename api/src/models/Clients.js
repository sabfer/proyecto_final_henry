var mongoose = require('mongoose')
var Schema = mongoose.Schema

var clients = new Schema({
    name:  String,
    phone: Number,
    direction: String,
})

module.exports = mongoose.model('Client', clients)