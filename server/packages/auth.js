const jwt = require('jsonwebtoken');
const db = require('../database/config');
const bcrypt = require('bcrypt');
const tokener = require('../packages/token');

import {auth as authModel} from '../api/models/auth' 

// module.exports = {
//     getUser: function (req, field) {
//         return new Promise((resolve, reject) => {
//             try {
//                 const token = req.query.token
//                 const decoded = jwt.verify(token, 'secret')
//                 db("users")
//                 .where('id', decoded.identifier )
//                 .select(field)
//                 .then(value => resolve(value[0]))
//             } catch (error) {
//               reject(error)
//             }
//         }) 
//     }
// }


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
            this.token = this.request.query.token
            this.decodedToken = jwt.verify(this.token, 'secret')
            return this.authModel.GetAuthById(this.decodedToken.indentifier)
        }catch(err) {
            throw { type: "BadRequest", message: err.message }
        }
    }

    async Authenticate(credentials) {
        try {
         //Get the user
         this.auth = await this.authModel.GetAuthByEmail(credentials.email)
         //Check for credentials
         const check = await bcrypt.compare(credentials.password, this.auth.password)
         console.log(check)
         if (!check) {
             throw {type: "BadRequest", message: "Invalid Creadentials"}
         }
         //Issue Token
        this.token = await jwt.sign({
            identifier: this.auth.id
         }, "secret", {expiresIn: '1h'});

        this.auth['token'] = this.token
        return this.auth
           
        } catch (err) {
            throw { type: "BadRequest", message: err.message }
        }
    }

    async Check(token) {
        try {
            this.token = this.IsParamDefined(token) || this.request.query.token
            this.decodedToken = await jwt.verify(this.token, 'secret')
            return true
        }catch(err) {
            // Log the err
            return err
        }
    }

    IsParamDefined(param) {
        return param !== undefined || param !== null || param !== '' ? param : false
    }
}




