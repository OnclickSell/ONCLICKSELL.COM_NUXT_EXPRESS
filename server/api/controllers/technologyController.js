
const technologyModel = require('../models/technology');
const auth = require('../../packages/auth');
const response = require('../../packages/response');
const wrapAsync = require('../../packages/wrapAsync')
let validator = require('../../packages/validator');
const responser = require('../../packages/responser')
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

exports.get_technologies = wrapAsync( async (req, res, next) => {
 
     const technologies = await technologyModel.get_technologies(req)
     console.log(technologies)
     responser.send(res, 200, "Success", technologies)
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

exports.add_technologies = wrapAsync( async (req, res, next) => {

//    const allowed_technologies = ['']

   req.body['created_at'] = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    try {
        await validator.validate({
            technology: ['required'],
            name: ['required'],
            version: ['required']
        }, req.body)
    }catch(err) {
        throw new Error(err)
    }


    const technology_details = {
        technology: req.body.technology,
        name: req.body.name,
        version: req.body.version,
        created_at: req.body.created_at,
        updated_at: req.body.created_at
    }

    const result = await technologyModel.add_technologies(req, technology_details)
    console.log(result)
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

exports.update_technologies = wrapAsync( async (req, res, next) => {

    req.body['created_at'] = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    try {
        await validator.validate({
            id: ['required'],
            technology: ['required'],
            name: ['required'],
            version: ['required']
        }, req.body)
    }catch(err) {
        throw new Error(err)
    }


    const technology_details = {
        id: req.body.id,
        technology: req.body.technology,
        name: req.body.name,
        version: req.body.version,
        created_at: req.body.created_at,
        updated_at: req.body.created_at
    }

    const result = await technologyModel.update_technologies(req, technology_details)
    console.log(result)
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

exports.delete_technologies = wrapAsync( async (req, res, next) => {

    try {
        await validator.validate({
            technology: ['required'],
        }, req.body)
    }catch(err) {
        throw new Error(err)
    }


    const technology_details = {
        technology: req.body.technology,
    }

    const result = await technologyModel.delete_technologies(req, technology_details, req.params.id)
    console.log(result)
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

exports.get_review = (req, res, next) => {
    console.log('fasfsafasf')
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

exports.add_reviews = wrapAsync( async (req, res, next) => {
    req.body['created_at'] = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    try {
        await validator.validate({
            user_id: ['required'],
            listing_id: ['required'],
            review: ['required'],
            rating: ['required']
        }, req.body)
    }catch(err) {
        throw new Error(err)
    }
    const result = await reviewsModel.add_reviews(req, req.body)
    console.log(result)
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

exports.update_reviews = wrapAsync( async (req, res, next) => {
    req.body['updated_at'] = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    try {
        await validator.validate({
            review: ['required'],
            rating: ['required']
        }, req.body)
    }catch(err) {
        throw new Error(err)
    }
    const new_review = {
        'review': req.body.review,
        'rating': req.body.rating,
        'updated_at': req.body.updated_at
    }
    const result = await reviewsModel.update_reviews(req, req.params.id, new_review)
    console.log(result)
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

exports.delete_reviews = wrapAsync( async (req, res, next) => {
    
    const result = await reviewsModel.delete_reviews(req, req.params.id)
    console.log(result)
})




