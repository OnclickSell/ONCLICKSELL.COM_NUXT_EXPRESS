
const plansModel = require('../models/plans');
const responser = require('../../packages/responser')
const wrapAsync = require('../../packages/wrapAsync')
let validator = require('../../packages/validator');
validator = new validator()

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

exports.create_single_listings = (req, res, next) => {
  
    this.callback = function callback(err) {
        if(err) {
            res.status(409).json({
                messgage: err
            })
        }else {
            res.status(200).json({
                messgage: 'You signed up successfully'
            })
        }
    }

    return listingsModel.create_single_listings(req, this.callback);
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

exports.get_plans = wrapAsync( async (req, res, next) => {
    try{
      const plans = await plansModel.get_plans()
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



