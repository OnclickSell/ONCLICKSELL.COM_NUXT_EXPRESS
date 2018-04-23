import CustomerModel from '../../api/models/customers'

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

export const CreateSubscription = () => {
    
}


export const CancelSubscription = () => {
    
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

export const CreateCustomer = async options => {
    const result = await stripe.customers.create({
        email: options.email,
        description: options.description
    })
    
    try {
        const customerModel = new CustomerModel
        return customerModel.Create({
            id: result.id,
            user_id: options.user_id,
            email: options.email,
            description: options.description
        })
    }catch (err) {
        console.log(err)
    }
    
}
export const GetCustomer = customerId => stripe.customers.retrieve(customerId)

export const DeleteCustomer = customerId => stripe.customers.del(customerId)

    

        

export const FindCustomerByPlan = () => {
    
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

export const CreatePlan = (options) => {
   return stripe.plans.create(options);
}

export const GetProduct = productId => stripe.products.retrieve(productId)

export const GetAllProducts = productId => stripe.products.list({ limit: 3 })


export const CreateProduct = productId => stripe.products.retrieve(productId)




