const router = require('express').Router()
const {addBrand ,updateContact,getBrand,getContact , addContact , deleteBrand ,getCustomers, deleteCustomer} = require('../controllers/feature')
const authentication = require('../middlewares/authentication')



router.get('/contact',getContact)

router.post('/contact',authentication,addContact)

router.put('/contact/:id',authentication,updateContact)

router.post('/brand',authentication,addBrand)

router.get('/brand',getBrand)

router.delete('/brand/:id',authentication,deleteBrand)

router.get('/customers',authentication,getCustomers);
router.delete('/customers/:id',authentication,deleteCustomer);

module.exports = router