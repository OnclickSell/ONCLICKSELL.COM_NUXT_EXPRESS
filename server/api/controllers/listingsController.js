
import listingsModel from '../models/listings'
import CustomersModel from '../models/customers'
import TechnologiesModel from '../models/technology'
import Responser from '../../packages/responser'
import PlansModel from '../models/plans'
import ImageUploader from '../../packages/image_uploader/index'
const mailer = require('../../packages/mailer')
import Controller from './controller'
import Validator from '../../packages/validator/index'
import { 
    CreateSubscription,
    CreateCustomer } from '../../packages/payment/index'
import {
    frontendPlateformsList,
    frontendFrameworksList,
    frontendLibrariesList,
    backendPlateformsList,
    backendFrameworksList,
    backendLibrariesList
} from '../models/technology'


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

    async InitSellPages() {
        let TECHNOLOGIES = {
            frontend: {
                framework: '',
                plateforms: '',
                libraries: '',
                html: '',
                css: ''
            },
            backend: {
                framework: '',
                plateforms: ''
            }
        }

        try {
            const PLANS_RESULT = await PlansModel.find()
            TECHNOLOGIES.frontend.framework = await frontendFrameworksList.find()
            TECHNOLOGIES.frontend.plateforms = await frontendPlateformsList.find()
            TECHNOLOGIES.frontend.libraries = await frontendLibrariesList.find()
            TECHNOLOGIES.frontend.html = [{name: 'html', version: '2424'}]
            TECHNOLOGIES.frontend.css = [{name: 'html', version: '2424'}]
            TECHNOLOGIES.backend.framework = await backendFrameworksList.find()
            TECHNOLOGIES.backend.plateforms = await backendPlateformsList.find()
            Responser.send(this.response, 200, "Success", {plans: PLANS_RESULT, technologies: TECHNOLOGIES})
        }catch(err) {
            console.log(err)
        }
    }


    async GetListings() {
        try {
            const that = this
            ListingModel.find((err, listings) => {
                if(err) throw err
                Responser.send(that.response, 200, "Success", listings)
            })
            
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
        // Get the Customer from the Database
        const customersModel = new CustomersModel
        const CUSTOMER = await customersModel.FindBy('user_id', this.request.body.user.id)
        
        try {
            // Upload the Screenshots
            const imageUploader = new ImageUploader(this.request)
            const result = await imageUploader.Upload('/OnclickSell.com/Projects/Thumbnails')
        
            // Extract the data from the form fields and store the screenshots in parsedData result
            const parsedData = JSON.parse(result.fields.data)
            parsedData.screenshots = result.result

            // Validate Listing Data
            const validationResult = Validator(LISTING_VALIDATION, parsedData)

            if(validationResult.error) {
                parsedData.screenshots.map(screenshot => {
                    // console.log(screenshot)
                    // imageUploader.Delete(screenshot)
                })
                Responser.send(this.response, 400, "Failed", {validationResult})

            }else {
                try {
                    
                    const { data } = await CreateSubscription({

                    })
                    // const ListingModel = new listingsModel()
                    // const createdList = await ListingModel.CreateListing(parsedData)
                    // await CreateCustomer({
                    //     user_id: this.request.body.user.id,
                    //     email: this.request.body.user.email,
                    //     description: this.request.body.user.description
                    // })
                    // await CreateSubscription({
                        
                    // })
                    // Send Email to the user
                    Responser.send(this.response, 200, "Success")
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






