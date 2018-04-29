
import Bcrypt from 'bcrypt'
import Auth from '../../packages/auth'
import CollectionModel from './collection'
import ListingModel from './listings'
import Mongoose from 'mongoose'
const Schema = Mongoose.Schema;
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

const USERS_SCHEMA = new Schema({
    name: {type: String, trim: true},
    sex: {type: String, default: 'male'},
    age: { type: Number, min: 18},
    email: String,
    password: String,
    description: String,
    avatar: String,
    rule: [{type: Array, default: 'user'}]
})

const users = Mongoose.model('Users', USERS_SCHEMA)

export default users


   

