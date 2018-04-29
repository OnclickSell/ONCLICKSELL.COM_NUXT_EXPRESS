const jwt = require('jsonwebtoken');
const db = require('../database/config');
const bcrypt = require('bcrypt');
import Tokener from '../packages/token'
import UserModel from '../api/models/user'
import UserController from '../api/controllers/userController'
import Mongoose from 'mongoose'

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
        this.token = ''
        this.decodedToken = ''
        this.auth = ''
    }

    async GetAuth () {
        
        try {
            this.token = this.request.query.token
            this.decodedToken = await jwt.verify(this.token, 'secret')
            return await UserModel.findOne({ '_id': this.decodedToken.identifier })
        }catch(err) {
            console.log(err)
            throw { type: "BadRequest", message: 'Expired Token' }
        }
    }

    async Authenticate(credentials) {
        try {
         //Get the user
         this.auth = await UserModel.findOne({ 'email': credentials.email })
         //Check for credentials
         const check = await bcrypt.compare(credentials.password, this.auth.password)
         if (!check) {
             throw {type: "BadRequest", message: "Invalid Creadentials"}
         }
         //Issue Token
        this.token = await jwt.sign({
            identifier: this.auth._id
         }, "secret", {expiresIn: '1h'});

        this.auth = {user: {name: this.auth.name, email: this.auth.email}, token: this.token}
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




