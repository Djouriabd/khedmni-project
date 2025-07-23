const mongoose = require("mongoose")

const userSchema =new mongoose.Schema({
    name :{
        type: String,
        required: true,
        unique: false
    },

    surname :{
        type: String,
        required: true,
        unique: false
    },

    username :{
        type: String,
        required: true,
        unique: true
    },

    email :{
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },

    password :{
    type: String,
    required: true,
    minlength: 8
    },

    createDate :{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model("User", userSchema)