const router = require('express').Router()
const {addBrand ,updateContact,getBrand,getContact , addContact , deleteBrand ,getCustomers, deleteCustomer, uploadBanner, getBanner} = require('../controllers/feature')
const authentication = require('../middlewares/authentication')
const {uploadBannerImg} = require('../middlewares/upload')


router.get('/contact',getContact)

router.post('/contact',authentication,addContact)

router.put('/contact/',authentication,updateContact)

router.put('/contact/:id',authentication,updateContact)

router.post('/brand',authentication,addBrand)

router.get('/brand',getBrand)

router.delete('/brand/:id',authentication,deleteBrand)

router.get('/customers',authentication,getCustomers);
router.delete('/customers/:id',authentication,deleteCustomer);

router.get('/banner',getBanner)
router.get('/banner/:id',getBanner)
router.post('/banner/',uploadBannerImg.single('files'),uploadBanner);
router.post('/banner/:id',uploadBannerImg.single('files'),uploadBanner);


module.exports = router