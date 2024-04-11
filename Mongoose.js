const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const model = mongoose.model('loginmodel',loginSchema);

module.exports = model;