const { vehicleModel } = require('../models/vehicles.model')
const {cleaner} = require('../middlewares/cleaner')





module.exports.getVehicles = async (req, res, next) => {
    try {
        let sort = req.query.sort;
        let cat = {type:req.query.type}
        let search = req.query.search
        if(search){
            let vehicle = []
            let searchlist = []
            search = search.toLowerCase();
            search = search.split(' ');
            for(let i of search){
               vehicle =  await vehicleModel.find({$or:[{model:i},{brand:i}]})
               vehicle.map( value => {
                    for(let j of searchlist){
                        if(j._id === value._id) return
                    }
                    searchlist.push(value)
                })
                return res.send(vehicle)
            }
            return res.send(searchlist)
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
        const vehicle = await vehicleModel(req.body).save()
        cleaner()
        return  res.send({status:200,message:"Vehicle add successfully",vehicle:vehicle})
    }
    catch (err) {
        next(err)
    }
}

module.exports.deleteVehicle = async (payload,req, res, next) => {
    try {
        const post  = await vehicleModel.deleteOne({_id:req.params.id})
        cleaner()
        return res.send({status:200,message:"delete successfully"})
    }
    catch (err) {
        next(err)
    }
}


module.exports.updateVehicle = async (payload,req, res, next) => {
    try {
        const post  = await vehicleModel.updateOne({_id:req.params.id},{$set:req.body})
        cleaner()
        return res.send({status:200,message:"successfuly Updated",data:post})
    }
    catch (err) {
        next(err)
    }
}

