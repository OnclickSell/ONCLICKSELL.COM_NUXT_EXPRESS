
const listingsModel = require('../models/listings');
const responser = require('../../packages/responser')
const wrapAsync = require('../../packages/wrapAsync')
let uploader = require('../../packages/uploader')
uploader = new uploader()
let validator = require('../../packages/validator');
validator = new validator()
const mailer = require('../../packages/mailer')

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
              title: req.body.newListing.title,
              summary: req.body.newListing.summary,
              description: req.body.newListing.description,
              price: req.body.newListing.price,
              plan_id: req.body.newListing.plan.id.toString(),
              F_framework_id: req.body.newListing.technologies.frontend.framework.id.toString(),
              F_plateform_id: req.body.newListing.technologies.frontend.plateform.id.toString(),
              F_libraries_id: req.body.newListing.technologies.frontend.libraries.id.toString(),
              B_framework_id: req.body.newListing.technologies.backend.framework.id.toString(),
              B_plateform_id: req.body.newListing.technologies.backend.plateform.id.toString(),
              B_libraries_id: req.body.newListing.technologies.backend.libraries.id.toString(),
          })

    } catch (err) {
        throw { type: "BadRequest", message: err }
    }

    try{
        
        const plans = await listingsModel.create_listing({...req.body.newListing})
        responser.send(res, 200, "Success", plans)
    }catch(err) {
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

exports.get_all_listings = (req, res, next) => {
    function callback(err, listings) {
        if(err) {
            res.status(409).json({
                status: "Failed",
                code: 409,
                messgage: "Something is wrong with your request",
                result: {
                    error: err
                }
            })
        }else {
            res.status(200).json({
                status: "OK",
                code: 200,
                messgage: 'All the listings are listed below',
                result: {
                    listings: listings
                }
            })
        }
    }
    return listingsModel.get_all_listings(req.query.offset, req.query.limit, req.query.order, callback);
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



