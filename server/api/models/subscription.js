
import Model from './model'
const db = require('../../database/config');
const bcrypt = require('bcrypt');
var stripe = require("stripe")(
    "sk_test_s472MoPEKkEJeg6OU22ogYyC"
  );

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


export default class subscriptionModel extends Model {
    constructor (fields) {
        super()
        this.table = 'subscriptions'
        this.fields = fields || '*'
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


}






