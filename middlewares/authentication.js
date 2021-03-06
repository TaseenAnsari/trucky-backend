const jwt = require('jsonwebtoken');


module.exports = async (req, res, next) => {
    try {
        if (!req.header('x-auth-token')) return res.send({ status: 401, message: 'token not found' });
        const payload = await jwt.verify(req.header('x-auth-token'), 'mysecrate')
        if (!payload) return res.send({ status: 200, message: "Token not valid" });
        next(payload);
    }
    catch (err) {
        next(err)
    }
}