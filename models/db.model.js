const mongoose = require('mongoose')



module.exports = async()=>{
    mongoose.connect('mongodb+srv://taseenansari:taseen12345@cluster0.2o2yq.mongodb.net/trucky')
    .then(()=>console.log("successfuly connected to mongodb"))
    .catch((err)=>console.log(err.message))
    }


