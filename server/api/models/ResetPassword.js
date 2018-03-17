
const db = require('../../database/config');
const bcrypt = require('bcrypt');
const gender_detect = require('../../packages/detect_profile');
const wrapAsync = require('../../packages/wrapAsync')
import Model from './model'
import PasswordReset from '../../packages/passwordReset/passwordReset'
import userModel from './user'

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

export default class ResetPassword extends Model {
    constructor (fields) {
        super()
        this.table = 'password_reset'
        this.fields = fields || '*'
    }

    async AddResetToken(email, ResetToken) {
        const UserModel = new userModel()
        const User = await UserModel.FindBy('email', email) 
        const result = await this.Create({
            user_id: User.id,
            reset_token: ResetToken,
            expiration_date: this.timestamp,
            created_at: this.timestamp,
            updated_at: this.timestamp
        })
        return result
    }


    async GetResetToken(email) {
        const User = await this.FindBy('email', email) 
        const ResetToken = await this.FindBy('user_id', User.email)
        return ResetToken.reset_token
    }
}