const { vehicleModel } = require('../models/vehicles.model')






module.exports.getVehicles = async (req, res, next) => {
    try {
        if (req.params.id) return res.send(await vehicleModel.find({ _id: req.params.id }))
        return res.send(await vehicleModel.find({}))
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