const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newUserSchema = new Schema({
    googleId: String,
    username: String,
    friends: {
        type: Array,
        default: []
    }
})

const User = mongoose.model('User', newUserSchema);
module.exports = User;