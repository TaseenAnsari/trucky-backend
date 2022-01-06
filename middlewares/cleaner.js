const config = require('config')
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const {vehicleModel} = require('../models/vehicles.model')

var s3 = new aws.S3({
    accessKeyId:config.get('awsId'),
    secretAccessKey:config.get('awsKey')
})

module.exports.cleaner = async()=>{
    try{
        const vehicle = await vehicleModel.find({})
        let  imagelist = []
        let s3Imglist = []
        const params = {
            Bucket: `truckytruck`,
            Prefix: ''
        };
        s3.listObjects(params, function (err, data) {
            if (err)
            throw err
            data.Contents.map(value=> s3Imglist.push(value.Key))
        });
        
        for(let i of vehicle){
            i.photo.map(value=> imagelist.push(value))
        };
        let flag = 0
        setTimeout(()=>{
            for(i of s3Imglist){
                flag = 0
                for(j of imagelist){
                    if(i==j){
                        flag = 1
                    }
                    else if(i =='banner'){
                        flag = 1
                    }
                }
                if(flag == 0){
                    const paramss = {
                        Bucket: `truckytruck`,
                        Key: `${i}`
                    };
                    s3.deleteObject(paramss,function (err, data) {
                        if (err)
                            throw err
                    });
                }
            }
        },5000)
        
    }catch(err){
        console.log(err.message);
    }

    }