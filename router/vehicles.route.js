const router = require('express').Router()
const {addVehicles , getVehicles ,deleteVehicle , updateVehicle, uploadPhoto } = require('../controllers/vehicles')
const auth = require('../middlewares/authentication')
const {uploadVehicleImg} = require('../middlewares/upload')



router.get('/',getVehicles);
router.get('/:id',getVehicles);
router.post('/',addVehicles);
router.post('/upload',uploadVehicleImg.array('files',10),uploadPhoto);
router.put('/:id',auth,updateVehicle)
router.delete('/:id',auth,deleteVehicle)



module.exports = router