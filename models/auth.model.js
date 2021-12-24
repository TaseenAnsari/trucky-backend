const mongoose = require('mongoose')




module.exports.authModel = mongoose.model('auth',new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    authorization:{
        type:Boolean,
        default:true
    }
}))