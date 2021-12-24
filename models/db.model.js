const mongoose = require('mongoose')



module.exports = async()=>{
    mongoose.connect('mongodb://localhost/trucky')
    .then(()=>console.log("successfuly connected to mongodb"))
    .catch((err)=>console.log(err.message))
    }


