

const authModel = require('../models/auth');
const validator = require('../../validators/check');
const tokener = require('../../packages/token');
const response = require('../../packages/response');
const bcrypt = require('bcrypt');
const wrapAsync = require('../../packages/wrapAsync')



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
    await validator.check(req.body, [
        {
            field: 'email',
            rules: 'required|email|min:3'
        },
        {
            field: 'password',
            rules: 'required'
        }
    ])

    try {
        const user = await authModel.signIn(req)
        await bcrypt.compare(req.body.password, user[0].password)
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

    await validator.check(req.body, [
        {
            field: 'full_name',
            rules: 'required|min:2|max:75'
        }
        // {
        //     field: 'age',
        //     rules: 'required'
        // },
        // {
        //     field: 'sex',
        //     rules: 'required'
        // },
        // {
        //     field: 'email',
        //     rules: 'required|email'
        // },
        // {
        //     field: 'password',
        //     rules: 'required|min:8|max:128|password'
        // }
    ])

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