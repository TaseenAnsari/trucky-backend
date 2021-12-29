const router = require('express').Router()
const {addVehicles , getVehicles ,deleteVehicle , updateVehicle, uploadPhoto} = require('../controllers/vehicles')
const auth = require('../middlewares/authentication')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})
const upload = multer({storage: storage})



router.get('/',getVehicles);
router.get('/:id',getVehicles);
router.post('/',addVehicles);
router.post('/upload',upload.array('files',10),uploadPhoto);
router.put('/:id',auth,updateVehicle)
router.delete('/:id',auth,deleteVehicle)


module.exports = router