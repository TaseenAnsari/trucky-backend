const router = require('express').Router()
const {addVehicles , getVehicles ,deleteVehicle , updateVehicle, uploadPhoto ,uploads} = require('../controllers/vehicles')
const auth = require('../middlewares/authentication')

router.get('/',getVehicles);
router.get('/:id',getVehicles);
router.post('/',addVehicles);
router.post('/upload',uploads.array('files',10),uploadPhoto);
router.put('/:id',auth,updateVehicle)
router.delete('/:id',auth,deleteVehicle)


module.exports = router