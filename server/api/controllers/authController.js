import Auth from '../../packages/auth'
import userController from './userController'
import userModel from '../models/user'
import PasswordReset from '../../packages/passwordReset/passwordReset'
import Mailer from '../../packages/mailer/mailer'
import Controller from './controller'
import ResetPasswordModel from '../models/ResetPassword'
const jwt = require('jsonwebtoken');
// const validator = require('../../validators/check');
const tokener = require('../../packages/token');
const Responser = require('../../packages/responser')
const bcrypt = require('bcrypt');
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
        const auth = new Auth(this.request)
        try {
            let AuthUser = await auth.Authenticate(this.request.body)
            Responser.send(this.response, 200, "Success", AuthUser)
        }catch(err) {
            throw { type: "BadRequest", message: err.message }
            // switch(err.type) {
            //     case 'BadRequest':
            //     Responser.send(this.response, 400, "Failed", err.message )
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
            const auth = new Auth(this.request)
            const UserController = new userController(this.request, this.response, this.next)
            const result = await UserController.CreateUser()
            const AuthUser = await auth.Authenticate({email: result.email, password: this.request.body.password})
            console.log(AuthUser)
            Responser.send(this.response, 200, "Success", AuthUser)
        }catch(err) {
            console.log(err)
            throw { type: "BadRequest", message: err.message }
            
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
        Responser.send(this.response, 200, "Success", 'Your reset link has been sent to your email. Check your inbox!')
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
                Responser.send(this.response, 200, "Success", 'true')
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
                await UserModel.SetNewPassword({
                    password: NewPassword, 
                    id: UserResetToken.user_id
                })
    
                Responser.send(this.response, 200, "Success", 'Youre password reseted successfully')
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
