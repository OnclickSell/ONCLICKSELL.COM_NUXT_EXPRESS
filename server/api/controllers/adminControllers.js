import Controller from './controller'
import Responser from '../../packages/responser'
import CustomerModel from '../models/customers'
import { GetProduct, CreatProducts, CreateCustomer, GetAllProducts } from '../../packages/stripe/index'


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
            const stripeResult = await CreateCustomer({
                
            })
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
}
