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
const SUBSCRIPTION_SCHEMA = {
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    subscription: {type: Schema.Types.Mixed}
}

const Subscription = Mongoose.model('subscriptions', SUBSCRIPTION_SCHEMA)

export default Subscription

