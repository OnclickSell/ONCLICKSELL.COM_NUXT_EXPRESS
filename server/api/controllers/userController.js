
import UserModel from '../models/user'
const validator = require('../../validators/input_validator');
import auth from '../../packages/auth'
const Responser = require('../../packages/responser')
const wrapAsync = require('../../packages/wrapAsync')
const url = require('url');  
const bcrypt = require('bcrypt');
const querystring = require('querystring');
const fs = require('fs');
let uploader = require('../../packages/uploader')
uploader = new uploader()

import CollectionModel from '../models/collection'
import ListingModel from '../models/listings'



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


export default class userController {
    constructor (request, response, next) {
      this.request = request
      this.response = response
      this.next = next
    }

    async GetUserDetails() {
        try {
            const requestedDetails = this.request.query.key
            const userModel = new UserModel()
            const Auth = new auth(this.request)
            const user = await Auth.GetAuth()
            switch(requestedDetails.toUpperCase()) {
                case 'LISTINGS':
                this.GetUserListings(user.id)
                break
                case 'PROFILE':
                this.GetUserListings(user.id)
                break
                case 'PAYMENTS':
                this.GetUserPayments(user.id)
                break
                case 'OTHERS':
                this.GetUserPayments(user.id)
                break
            }
        }catch(err) {
          switch(err.message) {
              case 'Expired Token':
              Responser.send(this.response, 400, "Failed", 'Youre Token has been expired!')
          }
        }
          
      }

      async GetUserListings(userId) {
        try {
          const userModel = new UserModel()
          const result = await userModel.FindBy('id', userId)
          Responser.send(this.response, 200, "Success", result)
        }catch(err) {
          switch(err.message) {
              case 'Expired Token':
              Responser.send(this.response, 400, "Failed", 'Youre Token has been expired!')
          }
        }
          
    }

    async GetAuth() {
      try {
        // const Auth = new auth(this.request)
        // let result = await Auth.GetAuth()
        Responser.send(this.response, 200, "Success", {name: 'aliakbar'})
      }catch(err) {
        switch(err.message) {
            case 'Expired Token':
            Responser.send(this.response, 400, "Failed", 'Youre Token has been expired!')
        }
      }
        
    }

    async CreateUser() {
        try {
            const newUser = new UserModel({
                name: this.request.body.name,
                email: this.request.body.email,
                password: await this.HashPassword(this.request.body.password)
            })
            return await newUser.save()
        }catch(err) {
            throw err
        }
        
    }

    async UpdateUser() {
      try{
        const userModel = new UserModel()
        const Auth = new auth(this.request)
        const result = await Auth.GetAuth()
        let updatedUser = ''
        const updateKyes = Object.keys(this.request.body)


        for(let i = 0; i < updateKyes.length; i++) {
            switch(updateKyes[i]) {
                case 'description':
                updatedUser = await userModel.Update(result.user.id, {description: this.request.body[updateKyes[i]]})
                break
                case 'password':
                const hash = await this.HashPassword(this.request.body.new_password)
                updatedUser = await userModel.Update(result.user.id, {password: hash})
                break
            }
        }
        
        updatedUser = {...updatedUser, token: this.request.query.token}
        Responser.send(this.response, 200, "Success", updatedUser)
      }catch(err) {
        throw { type: "BadRequest", message: err }
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

    async HashPassword(password) {
        return await bcrypt.hash(password, 10)
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

    SetProfilePicture(sex) {
        switch(sex.toUpperCase()) {
            case 'MALE':
            return 'http://res.cloudinary.com/onclicksell-com/image/upload/v1513504833/OnclickSell.com/Icons/Conceptional-Avatar-Male-Final-Design.png'
            case 'FEMALE':
            return 'http://res.cloudinary.com/onclicksell-com/image/upload/v1513504833/OnclickSell.com/Icons/Conceptional-Avatar-Female-Final-Design.png'
        }
    }

    async DoesEmailExists(email) {
        try {
            const userModel = new UserModel()
            const result = await userModel.FindBy('email', this.request.body.email)
            console.log(result)
            if(!result) 
                Responser.send(this.response, 200, "Success", 'The email is valid')
            else
                Responser.send(this.response, 400, "Failed", 'The email is already taken')
        }catch(err) {
            throw { type: "BadRequest", message: err }
        }
    }

}






