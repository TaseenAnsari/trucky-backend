const { brandModel , contactModel, bannerModel} = require('../models/feature.model')
const {customerModel} = require('../models/customers.model')

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
        return res.send(await contactModel.find({}))
    }   
    catch(err){
        next(err)
    }
}

module.exports.getCustomers = async(payload,req ,res ,next)=>{
    try{

        return res.send(await customerModel.find({}))
    }   
    catch(err){
        next(err)
    }
}

module.exports.deleteCustomer = async(payload,req ,res ,next)=>{
    try{

        return res.send(await customerModel.deleteOne({_id:req.params.id}))
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


module.exports.getBanner = async(req ,res ,next)=>{
    try{

        return res.send(await bannerModel.find({}))
    }   
    catch(err){
        next(err)
    }
}


module.exports.uploadBanner = async (req, res, next) => {
    try {
        const banner = await bannerModel.find({_id:req.params.id})
        if(!req.params.id){
            const ban = new bannerModel({banner:req.file.key})
            res.send(await ban.save())
        }
        else{
            const ban = await bannerModel.updateOne({_id:req.params.id},{$set:{
                banner:req.file.key
            }})
            res.send(banner[0].banner)
        }
    }
    catch (err) {
        next(err)
    }
}