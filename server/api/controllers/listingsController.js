
import listingsModel from '../models/listings'
const responser = require('../../packages/responser')
const wrapAsync = require('../../packages/wrapAsync')
let uploader = require('../../packages/uploader')
uploader = new uploader('OnclickSell.com/', 'screenshots', 2)
let validator = require('../../packages/validator');
validator = new validator()
const mailer = require('../../packages/mailer')
import Controller from './controller'


/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

export default class listingController extends Controller {


    async GetListings() {
        try {
            const Filter = {
                limit: this.request.query.limit,
                offset: this.request.query.offset,
                order: this.request.query.order
            }
            const ListingModel = new listingsModel()
            const result = await ListingModel.GetAll(Filter.limit, Filter.offset, Filter.order)
            responser.send(this.response, 200, "Success", result)
        }catch(err) {
            responser.send(this.response, 500, "Failed", 'Something went wrong on the server. Try again')
        }
    }

    async FindById() {
        try {
            const ListingModel = new listingsModel()
            const result = await ListingModel.FindBy('id', this.request.params.id)
            responser.send(this.response, 200, "Success", result)
        }catch(err) {
            responser.send(this.response, 500, "Failed", 'Something went wrong on the server. Try again')
        }
    }
}

exports.create_listing = wrapAsync( async (req, res, next) => {

    try {
        // const screenshots = await uploader.upload_screenshots(req, {folder: 'ffsf'})
        // req.body.newListing['screenshots'] = screenshots
        
        //  res.json(req.body.newListing.plan.id)
        let mailOptions = {
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: 'aliakbar.su@hotmail.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>' // html body
        };
        // mailer.send(mailOptions)
    }catch(err) {
        throw { type: "BadRequest", message: err.message }
    }
    console.log(req.body)
    try {
        

        await validator.validate({
            title: ['required'],
            summary: ['required'],
            description: ['required'],
            price: ['required'],
            plan_id: ['required'],
            F_framework_id: ['required'],
            F_plateform_id: ['required'],
            F_libraries_id: ['required'],
            B_framework_id: ['required'],
            B_plateform_id: ['required'],
            B_libraries_id: ['required']
          }, {
              title: req.body.context.title,
              summary: req.body.context.summary,
              description: req.body.context.description,
              price: req.body.context.price,
              plan_id: req.body.context.plan.id.toString(),
              F_framework_id: req.body.context.frontend.framework.id.toString(),
              F_plateform_id: req.body.context.frontend.plateform.id.toString(),
              F_libraries_id: req.body.context.frontend.libraries.id.toString(),
              B_framework_id: req.body.context.backend.framework.id.toString(),
              B_plateform_id: req.body.context.backend.plateform.id.toString(),
              B_libraries_id: req.body.context.backend.libraries.id.toString(),
          })


            // const screenshots = await uploader.uploadWithCloudinary(req.body.context.screenshot)
            // req.body.context.screenshot = screenshots
        

    } catch (err) {
        throw { type: "BadRequest", message: err.message }
    }

    try{
      
        const created_listing = await listingsModel.create_listing({...req.body.context})
        responser.send(res, 200, "Success", created_listing)
    }catch(err) {
        console.log(err)
        throw {type: "InternalServerError", message: "Something went wrong with the server. Please try again"}
    }
})

/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

exports.get_listings = wrapAsync( async(req, res, next) => {
  
    try {
        const filters = {
            offset: req.query.offset,
            limit: req.query.limit,
            order: req.query.order
        }
        console.log(filters)
        const listings = await listingsModel.get_listings(filters)
        responser.send(res, 200, "Success", listings)
    }catch (err) { 
        throw {type: "InternalServerError", message: "Something went wrong with the server. Please try again"}
    }
})


/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

exports.get_single_listing = (req, res, next) => {

    return listingsModel.get_single_listing({id: req.params.id, title: req.params.title})
    .then(result => {
        res.status(200).json({
            status: 'success',
            messgage: 'All the users are listed below',
            context: result
        })
    })
    .catch(err => {
        res.status(409).json({
            status: 'failled',
            messgage: "Something is wrong with your request",
            context: err
        })
    })
}

/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

exports.delete_single_listings = (req, res, next) => {
    function callback(err, user) {
        if(err) {
            res.status(409).json({
                messgage: "Something is wrong with your request"
            })
        }else {
            res.status(200).json({
                messgage: 'User were deleted successfully',
                users: user
            })
        }
    }
      
    return listingsModel.delete_single_listings(req.params.id, callback);
}

/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

exports.update_single_listings = (req, res, next) => {
    function callback(err, user) {
        if(err) {
            res.status(409).json({
                messgage: "Something is wrong with your request"
            })
        }else {
            res.status(200).json({
                messgage: 'User were updated successfully',
                users: user
            })
        }
    }
      
    return listingsModel.update_single_listings(req.params.id, req.body, callback);
}



/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

exports.fetch_technologies = (req, res, next) => {
    console.log('sfsafsf')
    return listingsModel.fetch_technologies()
    .then(result => {
        res.status(200).json({
            messgage: 'User were updated successfully',
            technologies: result
        })
    })
    .catch(err => {
        res.status(500).json({
            messgage: 'Something went wrong',
            error: err
        })
    })
}



