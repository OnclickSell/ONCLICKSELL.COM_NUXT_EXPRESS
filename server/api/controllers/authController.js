

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
        console.log(err + ' From AuthController')
        throw Error(err)
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
            full_name: ['required', 'min:35', 'max:80'],
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
        console.log(err + ' From AuthController')
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

exports.emailCheck = (req, res, next) => {

    return validator.check(req.body, [
    ],
    function(result) {
        if(result.length > 10) {
            res.status(400).json({
                status: 'Failed',
                code: 400,
                messgage: "The provided email address already exists",
                result: {
                    email: req.query.email
                }
            })
        } else {
            return authModel.emailCheck(req.query.email, (err, value) => {
                if(err) {
                    res.status(500).json({
                        status: 'Error',
                        code: 500,
                        messgage: "Something went wrong on the server. Try again",
                        result: []
                    })
                } else {
                    console.log(value.length)
                    if (value.length !== 0) {
                        res.status(400).json({
                            status: 'Failed',
                            code: 400,
                            messgage: "The provided email address already exists",
                            result: {
                                email: req.query.email
                            }
                        })
                    } else {
                        res.status(200).json({
                            status: "OK",
                            code: 200,
                            messgage: 'The email address is valid',
                            result: {
                                email: req.query.email
                            }
                        })
                    }
                }
            })
        }
    })
}