const db = require('../../database/config');
const bcrypt = require('bcrypt');
import Model from './model'
import mongoose from 'mongoose'


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

const Schema = mongoose.Schema;
const PLANS_SCHEMA = new Schema({
    id: String,
    created: Number,
    objectType: String,
    amount: Number,
    currency: String,
    interval: String,
    intervalCount: Number,
    billingCycles: Number,
    name: String,
    trialPeriodDays: Number,
    recursTo: String,
    metadata: {}
})

const plans = mongoose.model('Plans', PLANS_SCHEMA)

export default plans




