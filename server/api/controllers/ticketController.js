
const ticketModel = require('../models/ticket');
const auth = require('../../packages/auth');
const response = require('../../packages/response');
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

exports.get_tickets = wrapAsync( async (req, res, next) => {
 
     const result = await ticketModel.get_tickets(req)
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

exports.add_ticket = wrapAsync( async (req, res, next) => {

   req.body['created_at'] = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    try {
        await validator.validate({
            subject: ['required'],
            message: ['required'],
            listing_id: ['required'],
            user_id: ['required'],
            email: ['required', 'email']
        }, req.body)
    }catch(err) {
        throw new Error(err)
    }
    const ticket_details = {
        subject: req.body.subject,
        message: req.body.message,
        listing_id: req.body.listing_id,
        user_id: req.body.user_id,
        email: req.body.email,
        created_at: req.body.created_at
    }

    const result = await ticketModel.add_ticket(req, ticket_details)
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

exports.close_ticket = wrapAsync( async (req, res, next) => {

     const result = await ticketModel.close_ticket(req, req.params.id)
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

exports.add_comment = wrapAsync( async (req, res, next) => {

    req.body['created_at'] = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    try {
        await validator.validate({
            comment: ['required'],
            ticket_id: ['required']
        }, req.body)
    }catch(err) {
        throw new Error(err)
    }
    const comment = {
        comment: req.body.comment,
        ticket_id: req.params.id,
        created_at: req.body.created_at,
        updated_at: req.body.created_at
    }
    console.log(comment)

    const result = await ticketModel.add_comment(req, comment)
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




