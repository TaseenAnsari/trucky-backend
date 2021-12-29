const { brandModel , contactModel} = require('../models/feature.model')

module.exports.addBrand = async(payload,req ,res ,next)=>{
    try{
        return res.send(await (new brandModel({
            brand:req.body.brand,
            type:req.body.type
        })).save())
    }   
    catch(err){
        next()
    }
}

module.exports.getBrand = async(req ,res ,next)=>{
    try{
        return res.send(await brandModel.find({}))
    }   
    catch(err){
        next()
    }
}


module.exports.deleteBrand = async(payload,req ,res ,next)=>{
    try{
        return res.send(await brandModel.deleteOne({_id:req.params.id}))
    }   
    catch(err){
        next(err)
    }
}

module.exports.getContact = async(req ,res ,next)=>{
    try{
        console.log("yes")
        return res.send(await contactModel.find({}))
    }   
    catch(err){
        next(err)
    }
}


module.exports.addContact = async(payload,req ,res ,next)=>{
    try{
        return res.send(await (new contactModel({
            phone:req.body.number
        })).save())
    }   
    catch(err){
        next(err)
    }
}

module.exports.updateContact = async(payload,req ,res ,next)=>{
    try{
        return res.send(await contactModel.updateOne({
            _id:req.params.id
        },{$set:{phone:req.body.number}}))
    }   
    catch(err){
        next(err)
    }
}