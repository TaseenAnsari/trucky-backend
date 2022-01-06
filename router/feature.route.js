const router = require('express').Router()
const {addBrand ,updateContact,getBrand,getContact , addContact , deleteBrand ,getCustomers, deleteCustomer, uploadBanner} = require('../controllers/feature')
const authentication = require('../middlewares/authentication')
const {uploadBannerImg} = require('../middlewares/upload')


router.get('/contact',getContact)

router.post('/contact',authentication,addContact)

router.put('/contact/:id',authentication,updateContact)

router.post('/brand',authentication,addBrand)

router.get('/brand',getBrand)

router.delete('/brand/:id',authentication,deleteBrand)

router.get('/customers',authentication,getCustomers);
router.delete('/customers/:id',authentication,deleteCustomer);


router.post('/banner/:id',uploadBannerImg.single('files'),uploadBanner);


module.exports = router