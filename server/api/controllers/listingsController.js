
import listingsModel from '../models/listings'
import Responser from '../../packages/responser'
import ImageUploader from '../../packages/image_uploader/index'
const mailer = require('../../packages/mailer')
import Controller from './controller'
import Validator from '../../packages/validator/index'
import { CreateCustomer } from '../../packages/stripe/index'


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

export default class listingController extends Controller {


    async GetListings() {
        try {
            const Filter = {
                limit: this.request.query.limit,
                offset: this.request.query.offset,
                order: this.request.query.order
            }
            const ListingModel = new listingsModel()
            const result = await ListingModel.GetAll(Filter.limit, Filter.offset, Filter.order)
            Responser.send(this.response, 200, "Success", result)
        }catch(err) {
            Responser.send(this.response, 500, "Failed", 'Something went wrong on the server. Try again')
        }
    }

    async FindById() {
        try {
            const ListingModel = new listingsModel()
            const result = await ListingModel.FindBy('id', this.request.params.id)
            Responser.send(this.response, 200, "Success", result)
        }catch(err) {
            Responser.send(this.response, 500, "Failed", 'Something went wrong on the server. Try again')
        }
    }


    async CreateListing() {
        try {

            // Image the Screenshots
            const imageUploader = new ImageUploader(this.request)
            const result = await imageUploader.Upload('/OnclickSell.com/Projects/Thumbnails')
        
            // Extract the data from the form fields and store the screenshots in parsedData result
            const parsedData = JSON.parse(result.fields.data)
            parsedData.screenshots = result.result

            // Validate Listing Data
            const validationResult = Validator(LISTING_VALIDATION, parsedData)

            if(validationResult.error) {

                parsedData.screenshots.map(screenshot => {
                    console.log(screenshot)
                    // imageUploader.Delete(screenshot)
                })

                Responser.send(this.response, 400, "Failed", {validationResult})

            }else {
                try {
                    // Authorize Credit Card
                    // const ListingModel = new listingsModel()
                    // const createdList = await ListingModel.CreateListing(parsedData)
                    console.log('hi - creating customer')
                    await CreateCustomer({
                        user_id: this.request.body.user.id,
                        email: this.request.body.user.email,
                        description: this.request.body.user.description
                    })
                    // Create A Subscription
                    // Send Email to the user
                    Responser.send(this.response, 200, "Success", createdList)
                }catch(err) {

                }
            }

            
    

        }catch(err) {
            console.log(err)
            Responser.send(this.response, 500, "Failed", 'Something went wrong on the server. Try again')
        }
    }
}



const LISTING_VALIDATION = {
    type: 'required',
    title: 'required',
    summary: 'required',
    description: 'required',
    frontend: {
        plateform: 'required',
        plateform_v: 'required',
        framework: 'required',
        framework_v: 'required',
        libraries: 'required',
        html: 'required',
        css: 'required'
    },
    backend: {
        plateform: 'required',
        plateform_v: 'required',
        framework: 'required',
        framework_v: 'required',
        libraries: 'required'
    },
    plan: {
        id: 'required',
        plan_name: 'required'
    },
    billing_cycles: 'required',
    FirstName: 'required',
    LastName: 'required',
    EmailAddress: 'required',
    password: 'required'
    
}






