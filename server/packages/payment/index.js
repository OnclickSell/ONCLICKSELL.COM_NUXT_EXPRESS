import CustomerModel from '../../api/models/customers'
import SubscriptionsModel from '../../api/models/subscription'
import PlansModel from '../../api/models/stripe_plans'
import axios from 'axios'
const url = 'https://api.securionpay.com/'
const auth = { username: 'sk_test_sPFoHvts7SCTDO1HmadpUmPD', password: ''}

// axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//  .then(response => {
//    console.log(response.data.url);
//    console.log(response.data.explanation);
//  })
//  .catch(error => {
//    console.log(error);
//  });

const stripe = require("stripe")("sk_test_sOd8jdJ2NqUte8M0HKTbHCBT");
  

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

export const CreateSubscription = options => {
    return axios({
        url: `${url}customers/${options.customer_id}/subscriptions`,
        method: 'post',
        data: {
            captureCharges: options.captureCharges, 
            planId: options.planId
        }, 
        auth: auth
    })
}


export const GetAllSubscriptions = CUSTOMER_ID => axios.get(url + `customers/${CUSTOMER_ID}/subscriptions`)

export const GetSubscription = subscriptionId => stripe.subscriptions.retrieve(subscriptionId);

export const CancelSubscription = subscriptionId => stripe.subscriptions.del(subscriptionId);

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

export const CreateCustomer = async options => {
    return axios({
            url: url + 'customers',
            method: 'post',
            data: {
                email: options.email,
                card: options.card
            }, 
            auth: {
                username: 'sk_test_sPFoHvts7SCTDO1HmadpUmPD',
                password: ''
            }
        })
}
export const GetCustomer = customerId => stripe.customers.retrieve(customerId)

export const GetAllCustomers = () => {
    return axios({
        url: url + 'customers',
        method: 'get', 
        auth: {
            username: 'sk_test_sPFoHvts7SCTDO1HmadpUmPD',
            password: ''
        }
    })
} 

export const DeleteCustomer = customerId => stripe.customers.del(customerId)

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

export const CreatePlan = async (options) => {
  
    return axios({
            url: url + 'plans',
            method: 'post',
            data: {
                name: options.name,
                amount: options.amount,
                currency: options.currency,
                interval: options.interval,
                intervalCount: options.intervalCount,
                trialPeriodDays: options.trialPeriodDays,
                billingCycles: options.billingCycles,
                metadata: options.metadata
            }, 
            auth: {
                username: 'sk_test_sPFoHvts7SCTDO1HmadpUmPD',
                password: ''
            }
    })
}


export const GetPlan = planId => stripe.plans.retrieve(planId)

export const GetAllPlans = () =>  axios({
    url: url + 'plans',
    method: 'get', 
    auth: {
        username: 'sk_test_sPFoHvts7SCTDO1HmadpUmPD',
        password: ''
    }
    })

export const DeletePlan = planId =>  stripe.plans.del(planId)

export const FindCustomerByPlan = () => {
    
}


/*
|--------------------------------------------------------------------------
| PRODUCT SECTION
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

export const GetProduct = productId => stripe.products.retrieve(productId)

export const GetAllProducts = productId => stripe.products.list({ limit: 3 })


export const CreateProduct = productId => stripe.products.retrieve(productId)


/*
|--------------------------------------------------------------------------
| PAYMENTS SECTION
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/


export const AuthorizeAmount = options => stripe.charges.create({description: 'Example charge', capture: false, ...options})

export const CapturePayment = AuthorizeId => stripe.Charges.capture(AuthorizeId)

