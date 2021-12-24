const mongoose = require('mongoose')


module.exports.customerModel = mongoose.model('customer',new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    phone:{
        type:Number,
        required:true
    }
})) 