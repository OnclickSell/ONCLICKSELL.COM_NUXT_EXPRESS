const multer  = require('multer')
const cloudinary = require('cloudinary')
const fs = require('fs');

const storage = multer.memoryStorage()
const upload = multer({ dest: './server/uploads' }).single('profile_picture')

cloudinary.config({ 
    cloud_name: 'onclicksell-com', 
    api_key: '122981766251813', 
    api_secret: 'aMtJPB0uMuriTI3gMDZ_mBV7t-M' 
})

module.exports = function() {
    let that = this
    this.CloudinaryConfig = {
        folder: "OnclickSell.com/profile_pictures/",
        use_filename: true
    }
    this.upload = (req, res, folder) => {
        that.CloudinaryConfig.folder = folder ? folder : that.CloudinaryConfig.folder
        return new Promise((resolve, reject) => {
            //Store the file on the temporary path './server/uploads'
            upload(req, res, (err) => {
                if(err) {
                  reject(err)
                }
    
                //Upload the file to Cloudinary
                cloudinary.v2.uploader.upload(req.file.path, that.CloudinaryConfig, (error, result) => {
                    if(error) {
                        reject(error)
                    }
                    //Remove the file from the system './server/uploads'
                    fs.unlink(req.file.path)
                    resolve(result)
                })
            })
        })
    } 
}