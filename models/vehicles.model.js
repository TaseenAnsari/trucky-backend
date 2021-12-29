const mongoose = require('mongoose');



module.exports.vehicleModel = mongoose.model('vehicles',new mongoose.Schema({
    type:{
        type:String,
        enum:['comercial','car','bike'],
        default:'comercial'
    },
    brand:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        min:2000,
        max:2022,
        required:true
    },
    photo:{
        type:[String]
    },
    kmDriven:{
        type:Number
    },
    description:{
        type:String,
        // minlength:20
    },
    aproved:{
        type:Boolean,
        default:false
    },
    price:{
        type:Number
    },
    date:{
        type:Date,
        default: Date.now
    }

}))