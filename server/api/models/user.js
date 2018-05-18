
import Bcrypt from 'bcrypt'
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
    avatar: {type: String, default: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1513504833/OnclickSell.com/Icons/Conceptional-Avatar-Male-Final-Design.jpg'},
    rule: [{type: Array, default: 'user'}]
})

const User = Mongoose.model('Users', USERS_SCHEMA)

export default User


   

