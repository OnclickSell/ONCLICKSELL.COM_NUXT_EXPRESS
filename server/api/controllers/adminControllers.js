import Controller from './controller'
import Responser from '../../packages/responser'
import CustomerModel from '../models/customers'
import PlansModel from '../models/plans'
import SubscriptionsModel from '../models/subscription'
import { 
    GetProduct, 
    CreatProducts, 
    CreateCustomer, 
    CreatePlan,
    CreateSubscription,
    GetAllProducts,
    GetAllPlans, 
    GetAllCustomers} from '../../packages/payment/index'


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

export default class adminContrller extends Controller {
    async InitAdminPanel() {
        try {
            const customers = await GetAllCustomers()
            const plans = await GetAllPlans()
            // const subscriptions = await GetAllSubscriptions()
            Responser.send(this.response, 200, "Success", {
                customers: customers.data,
                plans: plans.data,
                subscriptions: {list: []}
            })
        }catch(err) {
            console.log(err)
            throw err
        }
        
    }
    async CreateProduct() {
        const result = await CreateProduct({
            name: 'selling project',
            type: 'service',
            description: 'Comfortable cotton t-shirt',
            // attributes: ['size', 'gender']
        })
        console.log(result)
    }

    async GetProduct(productId) {
        const result = await GetProduct(productId)
        Responser.send(this.response, 200, "Success", {...result})
       return result
    }

    async GetAllProducts(productId) {
        const result = await GetAllProducts()
        Responser.send(this.response, 200, "Success", {...result})
       return result
    }

    /*
    |--------------------------------------------------------------------------
    | CUSTOMERS SECTION
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application. This value is used when the
    | framework needs to place the application's name in a notification or
    | any other location as required by the application or its packages.
    |
    */

    async CreateCustomer() {
        try {
           const customerModel = new CustomerModel
           const { data } = await CreateCustomer(this.request.body)
           await customerModel.Create({
               customer_id: data.id,
               user_id: this.request.body.user.id,
               email: this.request.body.user.email,
               description: this.request.body.user.description,
               created_at: this.timestamp,
               updated_at: this.timestamp
           })
           Responser.send(this.response, 200, "Success", data)
        }catch(err) {
            console.log(err)
        }
    }

    async UpdateCustomer() {
        try {
            const stripeResult = await GetProduct(productId)
        }catch(err) {
            throw err
        }

        try {
            const customerModel = new CustomerModel
            const modelResult = await customerModel.Create()
            return modelResult
        }catch(err) {
            throw err
        }
    }

    /*
    |--------------------------------------------------------------------------
    | PLANS SECTION
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application. This value is used when the
    | framework needs to place the application's name in a notification or
    | any other location as required by the application or its packages.
    |
    */

    // Validation must appy
    async CreatePlan() {
        try {
            const plansModel = new PlansModel
            const result = await plansModel.Create({
                name: this.request.body.name,
                amount: this.request.body.amount,
                currency: this.request.body.currency,
                intervalCount: this.request.body.intervalCount,
                interval: this.request.body.interval,
                billingCycles: this.request.body.billingCycles,
                recursTo: this.request.body.recursTo,
                trialPeriodDays: this.request.body.trialPeriodDays,
                created_at: this.timestamp, 
                updated_at: this.timestamp
            })
            const { data } = await CreatePlan(this.request.body)
            if(data.error)
                throw Error('[Create Plan]: Something bad happend')
            Responser.send(this.response, 200, "Success", data)
        }catch(err) {
            console.log(err.message)
        }
    }

    
    /*
    |--------------------------------------------------------------------------
    | SUBSCRIPTIONS SECTION
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application. This value is used when the
    | framework needs to place the application's name in a notification or
    | any other location as required by the application or its packages.
    |
    */

    async CreateSubscription() {
        try {
           const subscriptionModel = new SubscriptionsModel
           const { data } = await CreateSubscription(this.request.body)
           await subscriptionModel.Create({
               customer_id: this.request.body.customer_id,
               planId: this.request.body.planId,
               user_id: this.request.body.user.id,
               created_at: this.timestamp,
               updated_at: this.timestamp
           })
           Responser.send(this.response, 200, "Success", data)
        }catch(err) {
            console.log(err.message)
        }
    }

}
