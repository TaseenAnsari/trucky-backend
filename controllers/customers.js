const { customerModel } = require('../models/customers.model')


module.exports.getCustomers = async (req, res, next) => {
    try {
        res.send(await customerModel.find({}))
    }
    catch (err) {
        next(err)
    }
}



module.exports.addCustomers = async (req, res, next) => {
    try {
        const result = customerModel(req.body)
        res.send(await result.save())
    }
    catch (err) {
        next(err)
    }
}