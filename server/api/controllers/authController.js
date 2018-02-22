

const authModel = require('../models/auth');
// const validator = require('../../validators/check');
const tokener = require('../../packages/token');
const response = require('../../packages/response');
const bcrypt = require('bcrypt');
const wrapAsync = require('../../packages/wrapAsync')
const validators = require('../../packages/validator')
let InternalServerError = require('../../packages/customError')
const responser = require('../../packages/responser')
// Errorer = new Errorer()
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

exports.signIn = wrapAsync(async function(req, res, next) {
    try {
        await validator.validate({
            email: ['required', 'email'],
            password: ['required', 'password']
          }, req.body)

    } catch (err) {
        throw { type: "BadRequest", message: err }
    }
    

    try {
        //Get the user
        const user = await authModel.signIn(req)
        //Check for credentials
        const check = await bcrypt.compare(req.body.password, user.password)
        if (!check) {
            throw {type: "BadRequest", message: "Invalid Creadentials"}
        }
        //Issue Token
        const token = await tokener.issueToken(user.id)


        const userDetails = {
            'id': user.id,
            'full_name': user.full_name,
            'email': user.email,
            'age': user.age,
            'description': user.description,
            'profile_picture': user.profile_picture
        }

        //Send the user details
        responser.send(res, 200, "Success", {user: userDetails, token: token})

    }catch(err) {
        throw {type: "InternalServerError", message: "Something went wrong with the server. Please try again"}
    }
})

/*
|--------------------------------------------------------------------------
| 
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

exports.signUp = wrapAsync( async (req, res, next) => {

    try {
        await validator.validate({
            email: ['required', 'email'],
            password: ['required', 'password'],
            full_name: ['required', 'min:5', 'max:80'],
            sex: ['required', 'min:4', 'max:6']
          }, req.body)

    } catch (err) {
        throw { type: "BadRequest", message: err }
    }

    try {
        //Add the user to Database
        const user = await authModel.signUp(req, next)
        //Issue Token
        const token = await tokener.issueToken(user[0].id)
        //Send the user details
        response.E200(req, res, {user: user[0], token: token})
    } catch(err) {
        throw { type: "InternalServerError", message: "Something went wrong with the server. Please try again" }
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

exports.emailCheck = wrapAsync( async (req, res, next) => {
    

    try {
        // throw InternalServerError(',fasfasfsf', 'fasfsaf', 'fasfasf', 'fasfasff')
        await validator.validate({
            email: ['required', 'email']
          }, req.body)

    } catch (err) {
        if(err instanceof InternalServerError) {
            console.log('fasfasf;asfjaskjf')
        }
        response.E404(req, res, {error: err})
    }

    
    try {
        const email = await authModel.emailCheck(req.body.email)        
        response.E200(req, res, {user: 'email is unique'})
    } catch(err) {
        throw err
    }

})