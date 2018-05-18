import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import UserModel from '../api/models/user'
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
export const Authenticate = async (credentials) => {
    try {

        //FIND THE USER ON THE DATABASE
        let User = await UserModel.findOne({ 'email': credentials.email })
        if(User == null) throw {type: "BadRequest", message: "User doesn't exist in the database"}

        //CHECK IF THE PROVIDED PASSWORD MATCH WITH THE PASSWORD STORED IN THE DATABASE
        const CHECK_PASSWORD_MATCH = await bcrypt.compare(credentials.password, User.password)
        if (!CHECK_PASSWORD_MATCH) throw {type: "BadRequest", message: "Invalid Creadentials"}
               
        //ISSUE THE TOKEN
        const Token = await jwt.sign({
            identifier: User._id
        }, "secret", {expiresIn: '1h'});

        //RETURN THE RETRIVED USER ALONG WITH THE TOKEN
        return {...User._doc, token: { value: Token, expiry: new Date().getTime() + 3600000}}

    } catch (err) { throw { type: "BadRequest", message: err.message } }
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

export const GetAuthByToken = async (TOKEN) => {
    try {
        //VERYFY THE TOKEN
        const Token = await jwt.verify(TOKEN, 'secret')

        //RETRIEVE THE USER FROM THE DATABASE
        let User = await UserModel.findOne({ '_id': Token.identifier })
        if(User == null) throw { type: "BadRequest", message: err.message }

        //ISSUE THE TOKEN
        const NewToken = await jwt.sign({
            identifier: User._id
        }, "secret", {expiresIn: '1h'});

       //RETURN THE RETRIVED USER ALONG WITH THE TOKEN
        return {...User._doc, token: { value: NewToken, expiry: 'fsfsf'}}

    }catch(err) { throw { type: "BadRequest", message: err.message } }
}




