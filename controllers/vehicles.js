const { vehicleModel } = require('../models/vehicles.model')






module.exports.getVehicles = async (req, res, next) => {
    try {
        let sort = req.query.sort;
        let cat = {type:req.query.type}
        let search = req.query.search
        if(search){
            search = search.toLowerCase();
            return res.send(await vehicleModel.find({$or:[{model:search},{brand:search}]}))
        } 
        if (req.params.id) return res.send(await vehicleModel.find({ _id: req.params.id }))
        if(req.query.sort){
            return res.send(await vehicleModel.find(cat).sort(sort))
        }
        return res.send(await vehicleModel.find(cat))
    }
    catch (err) {
        next(err)
    }
}
module.exports.uploadPhoto = async (req, res, next) => {
    try {
        res.send(req.files)
    
    }
    catch (err) {
        next(err)
    }
}

module.exports.addVehicles = async (req, res, next) => {
    try {
        console.log(req.file,(req.body))
        return res.send(await vehicleModel(req.body).save())
    }
    catch (err) {
        next(err)
    }
}

module.exports.deleteVehicle = async (payload,req, res, next) => {
    try {
        const post  = await vehicleModel.deleteOne({_id:req.params.id})
        return res.send({status:200,message:"delete successfully"})
    }
    catch (err) {
        next(err)
    }
}


module.exports.updateVehicle = async (payload,req, res, next) => {
    try {
        const post  = await vehicleModel.updateOne({_id:req.params.id},{$set:req.body})
        return res.send(post)
    }
    catch (err) {
        next(err)
    }
}