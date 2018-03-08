const multer  = require('multer')
const cloudinary = require('cloudinary')
cloudinary.config({ 
    cloud_name: 'onclicksell-com', 
    api_key: '122981766251813', 
    api_secret: 'aMtJPB0uMuriTI3gMDZ_mBV7t-M' 
})
const fs = require('fs');




module.exports = function(folder, fieldName, filesLimit) {
    let that = this
    let fields = fieldName
    let limit = filesLimit
    let files = []
    this.CloudinaryConfig = {
        folder: folder,
        use_filename: true
    },
    // this.singular_upload = multer({ dest: './server/uploads' }).single(field),

    this.multiple_upload = multer({ dest: './server/uploads' }).array(fields, limit),
    this.upload_to_cloudinary = (files) => {
        return new Promise( async (resolve, reject) => {
            let results = []
            let errors = []
           for(var i = 0; i < files.length; i++) {
                await cloudinary.v2.uploader.upload(files[i], that.CloudinaryConfig, async (error, result) => {
                    if(error) {
                        errors.push(error)
                        await fs.unlink(files[i])
                    }
                    //Remove the file from the system './server/uploads'
                    results.push(result.url)
                    await fs.unlink(files[i])
                })
            }

            if(errors.length > 0)
                reject(errors)
            else 
                resolve(results)
        })
    }


    this.upload = (req, configs) => {
        return new Promise( async (resolve, reject) => {

            //Check where multiple field exists
            // if(configs.fields.constructor === Array) {                 
                
               await this.multiple_upload(req, 'TEST', async (err) => {
                    if(err) {
                      reject(err)
                    
                    }

                    console.log(req.files)
                    // Store the files in files array
                    for(var i = 0; i < req.files.length; i++) {
                      files.push(req.files[i].path)
                      console.log(i)
                    }

                    try {
                        result = await that.upload_to_cloudinary(files)
                        resolve(result)
                    }catch(err) {
                        reject(err)
                    }
                })
            // } else {
            //     this.singular_upload(req, 'TEST', async (err) => {
            //         if(err) {
            //           reject(err)
            //         }

            //         files.push(req.file.path)

            //        try {
            //            result = await that.upload_to_cloudinary(files)
            //            resolve(result)
            //        }catch(err) {
            //            reject(err)
            //        }
            //     })
            // }

            
        })

    }
    this.uploadWithCloudinary = (files) => {
        console.log('fasfsaf')
        return new Promise( async (resolve, reject) => {
            let results = []
            let errors = []
           for(var i = 0; i < files.length; i++) {
               console.log(files[i])
                await cloudinary.v2.uploader.upload(files[i], that.CloudinaryConfig, async (error, result) => {
                    if(error) {
                        errors.push(error)
                        // await fs.unlink(files[i])
                    }
                    //Remove the file from the system './server/uploads'
                    results.push(result.url)
                    // await fs.unlink(files[i])
                })
            }

            if(errors.length > 0)
                reject(errors)
            else 
                resolve(results)
        })
    }
}


// "OnclickSell.com/profile_pictures/"