const mongoose = require('mongoose')




module.exports.contactModel= mongoose.model('contact',new mongoose.Schema({
    phone:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10
    }
}))


module.exports.brandModel= mongoose.model('brand',new mongoose.Schema({
    brand:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:['comercial','car','bike']
    }
}))

module.exports.bannerModel= mongoose.model('banner',new mongoose.Schema({
    banner:{
        type:String,
        required:true
    },
}))

