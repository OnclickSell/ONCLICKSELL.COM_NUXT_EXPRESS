import bcrypt from 'bcrypt'
import Mongoose from 'mongoose'
const Schema = Mongoose.Schema

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
const CUSTOMERS_SCHEMA = {
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    customer: {type: Schema.Types.Mixed}
}

const Customers = Mongoose.model('customers', CUSTOMERS_SCHEMA)

export default Customers



