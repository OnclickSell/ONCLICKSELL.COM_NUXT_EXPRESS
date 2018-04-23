const authModel = require('../models/auth');
import auth from '../../packages/auth'
import userController from './userController'
import userModel from '../models/user'
import PasswordReset from '../../packages/passwordReset/passwordReset'
import Mailer from '../../packages/mailer/mailer'
import Controller from './controller'
import ResetPasswordModel from '../models/ResetPassword'
const jwt = require('jsonwebtoken');
// const validator = require('../../validators/check');
const tokener = require('../../packages/token');
const response = require('../../packages/response');
const responser = require('../../packages/responser')
const bcrypt = require('bcrypt');
const wrapAsync = require('../../packages/wrapAsync')
const validators = require('../../packages/validator')
let InternalServerError = require('../../packages/customError')
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

export default class authController extends Controller {

    async Authenticate() {
        const Auth = new auth(this.request)
        try {
            let result = await Auth.Authenticate(this.request.body)
            responser.send(this.response, 200, "Success", {...result})
        }catch(err) {
            throw { type: "BadRequest", message: err.message }
            // switch(err.type) {
            //     case 'BadRequest':
            //     responser.send(this.response, 400, "Failed", err.message )
            // }
        }
        
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

    async SignUp() {
        try {
            const Auth = new auth()
            const UserModel = new userModel()
            const UserController = new userController(this.request, this.response, this.next)
            const result = await UserController.CreateUser()
            const AuthUser = await Auth.Authenticate({email: result.email, password: this.request.body.password})
            responser.send(this.response, 200, "Success", {...AuthUser})
        }catch(err) {
            throw { type: "BadRequest", message: err.message }
            console.log(err)
        }
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
    async ResetPassword() {
        const resetPasswordModel = new ResetPasswordModel()
        const mailer = new Mailer()
        const passwordReset = new PasswordReset()
        const ResetToken = await passwordReset.GenerateToken({name: 'aliabkarSultani'})
        await resetPasswordModel.AddResetToken(this.request.body.email, ResetToken)
        await mailer.Send({
            text: 'http://127.0.0.1:3000/login/reset-password?resetToken=' + ResetToken,
            to: this.request.body.email
        })
        responser.send(this.response, 200, "Success", 'Your reset link has been sent to your email. Check your inbox!')
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

    async ValidatePasswordResetToken () {
        const ResetToken = this.request.query.ResetToken
        const resetPasswordModel = new ResetPasswordModel()
        const result = resetPasswordModel.FindBy('reset_token', ResetToken)
        if(result) {
            if(await this.VerifyResetToken(result.reset_token)) {
                responser.send(this.response, 200, "Success", 'true')
            }
        }
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

    async SetNewPassword () {
        const ResetToken = this.request.body.reset_token
        const NewPassword = this.request.body.new_password
        const resetPasswordModel = new ResetPasswordModel()
        const UserResetToken = await resetPasswordModel.FindBy('reset_token', ResetToken)
        console.log(UserResetToken)
        // Note: check for expiration date
        try {
            if(UserResetToken && await jwt.verify(ResetToken, 'secret')) {
                const UserModel = new userModel()
                await UserModel.SetNewPassword({
                    password: NewPassword, 
                    id: UserResetToken.user_id
                })
    
                responser.send(this.response, 200, "Success", 'Youre password reseted successfully')
            }
        }catch(err) {
            console.log(err)
            throw { type: "BadRequest", message: err.message }
        }
        
    }

    async VerifyResetToken (ResetToken) {
        return await jwt.verify(ResetToken, 'secret')
    }
}

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
        const token = await tokener.issueToken(user.id)
        //Send the user details
        response.E200(req, res, {user: user, token: token})
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