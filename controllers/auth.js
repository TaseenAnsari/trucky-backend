const { authModel } = require('../models/auth.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



module.exports.login = async (req, res, next) => {
    try{
    const user = await authModel.find({ email: req.body.email })
    if (!user[0]) return res.send({ message: "User Doesn't Exist", status: 404 });
    if (!await bcrypt.compare(req.body.password, user[0].password)) return res.send({ message: "Password Missmatched", status: 401 })
    const token  = await jwt.sign({ email: user[0].email }, "mysecrate")
    res.cookie('token',token)
    return res.send({ status: 200, token: token })
    }
    catch(err){
        next(err)
    }
}

module.exports.register = async (req, res, next) => {
    try {
        const user = authModel({
            email: req.body.email,
            password: await bcrypt.hash(req.body.password,await bcrypt.genSalt(10))
        })
        await user.save()
        return res.send({ status: 200, message: "success" })

    }
    catch (err) {
        next(err)
    }
}

module.exports.verifyToken = async (payload,req, res, next) => {
    try {
        return res.send(payload)

    }
    catch (err) {
        next(err)
    }
}