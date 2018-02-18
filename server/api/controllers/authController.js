

const authModel = require('../models/auth');
// const validator = require('../../validators/check');
const tokener = require('../../packages/token');
const response = require('../../packages/response');
const bcrypt = require('bcrypt');
const wrapAsync = require('../../packages/wrapAsync')
const validators = require('../../packages/validator')
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
        response.E404(req, res, {error: err})
    }
    

    try {
        const user = await authModel.signIn(req)
        const check = await bcrypt.compare(req.body.password, user[0].password)
        if (!check) {
            throw Error('Invalid credentials')
        }
        const token = await tokener.issueToken(user[0].id)
        response.E200(req, res, {user: user[0], token: token})   

    }catch(err) {
        throw err
    }

    throw Error('woops')
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

exports.signUp = wrapAsync( async (req, res, next) => {

    try {
        await validator.validate({
            email: ['required', 'email'],
            password: ['required', 'password'],
            full_name: ['required', 'min:5', 'max:80'],
            sex: ['required', 'min:4', 'max:6']
          }, req.body)

    } catch (err) {
        response.E404(req, res, {error: err})
    }

    try {
        const user = await authModel.signUp(req, next)
        const token = await tokener.issueToken(user[0].id)
        response.E200(req, res, {user: user[0], token: token})
    } catch(err) {
        throw err
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
        await validator.validate({
            email: ['required', 'email']
          }, req.body)

    } catch (err) {
        response.E404(req, res, {error: err})
    }

    
    try {
        const email = await authModel.emailCheck(req.body.email)        
        response.E200(req, res, {user: 'email is unique'})
    } catch(err) {
        throw err
    }

})