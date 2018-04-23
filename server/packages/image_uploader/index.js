import Formidable from 'formidable'
import fs from 'fs'
const cloudinary = require('cloudinary')
cloudinary.config({ 
    cloud_name: 'onclicksell-com', 
    api_key: '122981766251813', 
    api_secret: 'aMtJPB0uMuriTI3gMDZ_mBV7t-M' 
})

export default class uploader {
    folder = ''
    req = null
    constructor (req) {
        this.req = req
    }

    async Upload(folder) {
        this.folder = folder
        const that = this
        var form = new Formidable.IncomingForm();
        form.multiples = false;
        return new Promise((resolve, reject) => {
            try{
                let results = []
                let counter = 0
                form.parse(this.req, async (err, fields, files) => {
                    if (err) reject(err);
                    try {
                         for(let file in files) {
                          const result = await that.cloudinary(files[file].path, that.folder)
                          results.push(result)
                          ++counter
                          if(counter == results.length) resolve({result: results, fields: fields})
                        }
                    }catch (err) { reject(err) }
                })
            }catch(err) { reject(err) }
        })
    }

    Delete(fileName) {
        return new Promise((resolve, reject) => {
            cloudinary.v2.uploader.destroy(fileName, (error, result) => {
                if(error) reject(error)
                resolve(result)
            })
        })
    }

    cloudinary(file, folder) {
        return cloudinary.v2.uploader.upload(file, {use_filename: true, folder: folder})
    }
}