const jwt = require('jsonwebtoken');
const db = require('../database/config');
const bcrypt = require('bcrypt');
const tokener = require('../packages/token');

import authModel from '../api/models/auth'
import UserModel from '../api/models/user'
import UserController from '../api/controllers/userController'

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

export default class auth {
    constructor (request) {
        this.request = request
        this.authModel = new authModel()
        this.token = ''
        this.decodedToken = ''
        this.auth = ''
    }

    async GetAuth () {
        
        try {
            const userModel = new UserModel()
            this.token = this.request.query.token
            this.decodedToken = await jwt.verify(this.token, 'secret')
            return await userModel.GetUser(this.decodedToken.identifier)
        }catch(err) {
            console.log(err)
            throw { type: "BadRequest", message: 'Expired Token' }
        }
    }

    async Authenticate(credentials) {
        try {
         //Get the user
         this.auth = await this.authModel.FindBy('email', credentials.email)
         //Check for credentials
         const check = await bcrypt.compare(credentials.password, this.auth.password)
         if (!check) {
             throw {type: "BadRequest", message: "Invalid Creadentials"}
         }
         //Issue Token
        const userModel = new UserModel()
        this.auth = await userModel.GetUser(this.auth.id)
        this.token = await jwt.sign({
            identifier: this.auth.user.id
         }, "secret", {expiresIn: '1h'});

        this.auth['token'] = this.token
        return this.auth
           
        } catch (err) {
            throw { type: "BadRequest", message: err.message }
        }
    }

    async Check(token) {
        try {
            this.token = token || this.request.query.token
            this.decodedToken = await jwt.verify(this.token, 'secret')
            return true
        }catch(err) {
            // Log the err
            return false
        }
    }

    IsParamDefined(param) {
        return param !== undefined || param !== null || param !== '' ? param : false
    }
}




