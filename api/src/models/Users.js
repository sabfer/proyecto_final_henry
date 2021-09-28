var mongoose = require('mongoose')
var Schema = mongoose.Schema

var users = new Schema({
    password:  String,
    username: String,
    email: String,
    post: String,
})

module.exports = mongoose.model('User', users)