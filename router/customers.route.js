const router = require('express').Router()
const { model } = require('mongoose')
const { route } = require('../app')
const {getCustomers , addCustomers} = require('../controllers/customers')




router.get('/',getCustomers)

router.post('/',addCustomers)


module.exports = router