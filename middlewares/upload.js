const config = require('config')
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')



var s3 = new aws.S3({
    accessKeyId:config.get('awsId'),
    secretAccessKey:config.get('awsKey')
})

module.exports.uploadVehicleImg = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'truckystruck',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })
})

module.exports.uploadBannerImg = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'truckystruck',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null,"banner/"+ Date.now()+file.originalname)
    }
  })
})