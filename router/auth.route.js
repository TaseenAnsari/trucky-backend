const router = require('express').Router()
const {login , register ,verifyToken} = require('../controllers/auth')
const auth = require('../middlewares/authentication')

router.post('/',login);
router.post('/register',register)
router.get('/verify-token',auth,verifyToken)



module.exports = router