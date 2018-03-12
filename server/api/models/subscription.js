
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

    async CreateSubscription(data) {

        const customer = await this.CreateCustomer(data)
       
        stripe.subscriptions.create({
            customer: customer.id,
            items: [
              {
                plan: 1,
              },
            ]
          }, function(err, subscription) {
            console.log(err, subscription)
            }
          );
        
    //   await this.Create({

    //   })
    }

    CreateCustomer(data) {
        return new Promise((resolve, reject) => {
            stripe.customers.create({
                description: 'Customer for zoey.martin@example.com',
                source: "tok_amex" // obtained with Stripe.js
              }, function(err, customer) {
                if(err)
                    reject(err)
                resolve(customer)
            });
        })
        
    }

    async Charge(data) {
        stripe.charges.create({
            amount: data.price,
            currency: "USD",
            source: data.payment.id, // obtained with Stripe.js
            description: "Charge for zoey.martin@example.com"
          }, function(err, charge) {
            console.log(err, charge)
          });
    }

}






