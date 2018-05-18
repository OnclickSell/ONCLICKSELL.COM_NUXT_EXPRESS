
import listingsModel from '../models/listings'
import CustomersModel from '../models/customers'
import SubscriptionModel from '../models/subscription'
import Responser from '../../packages/responser'
import PlansModel from '../models/plans'
import ImageUploader from '../../packages/image_uploader/index'
import mailer from '../../packages/mailer'
import Controller from './controller'
import Validator from '../../packages/validator/index'
import ListingModel from '../models/listings'
import { 
    CreateSubscription,
    CreateCustomer } from '../../packages/payment/index'
import {
    frontendPlateformsList,
    frontendFrameworksList,
    frontendLibrariesList,
    backendPlateformsList,
    backendFrameworksList,
    backendLibrariesList,
    frontendPlateforms,
    frontendFrameworks,
    frontendLibraries,
    backendPlateforms,
    backendFrameworks,
    backendLibraries
} from '../models/technology'

import { throwError, throwIf } from '../../packages/utils'


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

    InitSellPages() {
        return new Promise(async(resolve, reject) => {
            try {
                const TECHNOLOGIES = await {
                    frontend: {
                        frameworks: await frontendFrameworksList.find(),
                        plateforms: await frontendPlateformsList.find(),
                        libraries: await frontendLibrariesList.find(),
                        html: [{name: 'html', version: '2424'}],
                        css: [{name: 'html', version: '2424'}]
                    },
                    backend: {
                        frameworks: await backendFrameworksList.find(),
                        plateforms: await backendPlateformsList.find()
                    },
                    plans: await PlansModel.find()
                }
    
                Responser.send(this.response, 200, "Success", TECHNOLOGIES)
                
            }catch(err) { reject({ type: "BadRequest", message: err.message }) }
        })
    }


    GetListings() {
        return new Promise(async(resolve, reject) => {
            try {
                let listings
                await ListingModel.find()
                .select('title summary description technologies thumbnails codesnippets')
                .populate({ 
                    path: 'technologies.frontend.plateforms',
                    model: 'frontendPlateforms'
                 })
                 .populate({ 
                    path: 'technologies.frontend.frameworks',
                    model: 'frontendFrameworks'
                 })
                 .populate({ 
                    path: 'technologies.frontend.libraries',
                    model: 'frontendLibraries'
                 })
                 .populate({ 
                    path: 'technologies.backend.plateforms',
                    model: 'backendPlateforms'
                 })
                 .populate({ 
                    path: 'technologies.backend.frameworks',
                    model: 'backendFrameworks'
                 })
                 .populate({ 
                    path: 'technologies.backend.libraries',
                    model: 'backendLibraries'
                 })
                 .populate({ 
                    path: 'user',
                    model: 'Users'
                 })
                .exec()
                .then(throwIf(r => {listings = r; return !r},
                500, 'Failed', 'Something went wrong on the server!'),
                throwError(500, 'uploader error', 'Customer creation failed'))
            
                Responser.send(this.response, 200, "Success", listings)
            }catch(err) { reject({ type: "BadRequest", message: err.message }) }
        })
    }

    async FindById() {
        try {
            const ListingModel = new listingsModel()
            const result = await ListingModel.FindBy('id', this.request.params.id)
            Responser.send(this.response, 200, "Success", result)
        }catch(err) {
            Responser.send(this.response, 500, "Failed", 'Something went wrong on the server. Try again')
            console.log(err) 
        }
    }


    CreateListing() {
        return new Promise(async(resolve, reject) => {
            try {
                console.log('Hi from listing controllers')
                //UPLOAD THE SCREENSHOTS
                const imageUploader = new ImageUploader(this.request)
                const result = await imageUploader.Upload('/OnclickSell.com/Projects/Thumbnails')

                if(!result) throwError(500, 'uploader error', 'something went wrong')
            
                //EXTRACT THE DATA FROM THE FORM FIELDS AND STORE THE SCREENHOSTS IN PARSED DATA RESULT
                const parsedData = JSON.parse(result.fields.data)
                parsedData.screenshots = result.result

                //VALIDATE LISTING DATA
                const validationResult = Validator(LISTING_VALIDATION, parsedData)

                //IF VALIDATIN FAILED DELETE THE SCREENSHOTS
                if(validationResult.error) {
                    parsedData.screenshots.map(screenshot => {
                        // console.log(screenshot)
                        // imageUploader.Delete(screenshot)
                    })
                    reject({type: 'BadRequest', message: validationResult})
                }

               
                //CHECK IF CUSTOMER ALREADY EXISTS
               let FoundCustomer = await CustomersModel.findOne({user: this.request.body.user._id}).exec()
                .then(null, throwError(500, 'uploader error'))

                if(!FoundCustomer) {
                    //CREATE A NEW CUSTOMER
                    await CreateCustomer({
                        email: this.request.body.user.email,
                        card: parsedData.token
                    }).then(throwIf(r => {
                        FoundCustomer = r
                        return !r
                    }, 500, 'Failed', 'Something went wrong on the server!'),
                        throwError(500, 'uploader error', 'Customer creation failed'))
                    
                    //STORE THE CUSTOMER IN THE DATABASE
                    await new CustomersModel({
                        user: this.request.body.user._id,
                        customer: FoundCustomer.data
                    }).save()
                    .then(throwIf(r => !r, 500, 'ading customer', 'Something went wrong on the server!'),
                        throwError(500, 'uploader error', 'adding Customer creation failed'))
                }



                //CREAE A NEW SUBSCRIPTION IF SUBSCRIPTION DOESN'T EXISTS
                let CreatedSubscription = null
                await CreateSubscription({
                    planId: "plan_dSC0ElHRosD7SWvhH1T7B3MB",
                    customer_id: FoundCustomer.customer.id || FoundCustomer.id,
                    captureCharges: false,
                }).then(throwIf(r => {
                    CreatedSubscription = r
                    return !r
                }, 500, 'Subscription creation failed', 'Something went wrong on the server!'),
                throwError(500, 'uploader error', 'Subscription creation failed'))

                await new SubscriptionModel({
                    user: this.request.body.user._id,
                    subscription: CreatedSubscription.data
                })
                .save()
                .then(throwIf(r => !r, 500, 'ading subscription', 'Something went wrong on the server!'),
                    throwError(500, 'uploader error', 'adding Subscription creation failed'))


                // console.log(parsed)
                await UPLOAD_LISTING(parsedData, this.request.body.user)
                //#2 CAPTURE THE CREATED CHARGE
                //#3 SEND A CONFIRMATION EMAIL
                //#4 SEND BACK THE NEWLY CREATED LISTING
    
        

            }catch(err) { console.log(err), reject({type: 'BadRequest', message: err}) }
        })
    }
}





const UPLOAD_LISTING = async (data, user) => {

    //ADD FRONTEND PLATEFORMS
    let new_frontend_plateforms = null
    await new frontendPlateforms({
        name: data.frontend.plateform,
        version: data.frontend.plateform_v
    }).save()
    .then(throwIf(r => {new_frontend_plateforms = r; return !r}, 500, 'Add Frontend Plateforms', 'Creating Frontend Plateform Problem'),
        throwError(500, 'Add Frontend Plateforms', 'Creating Frontend Plateform Problem'))

    //ADD FRONTEND FRAMEWORKS
    let new_frontend_frameworks = null
    await new frontendFrameworks({
        name: data.frontend.framework,
        version: data.frontend.framework_v
    }).save()
    .then(throwIf(r => {new_frontend_frameworks = r; return !r}, 500, 'Add Frontend Frameworks', 'Creating Frontend Frameworks Problem'),
        throwError(500, 'Add Frontend Frameworks', 'Creating Frontend Frameworks Problem'))

    //ADD FRONTEND LIBRARIES
    let new_frontend_libraries = null
    await new frontendLibraries({
        name: data.frontend.libraries,
        version: data.frontend.libraries
    }).save()
    .then(throwIf(r => {new_frontend_libraries = r; return !r}, 500, 'Add Frontend Libraries', 'Creating Frontend Libraries'),
        throwError(500, 'Add Frontend Libraries', 'Creating Frontend Libraries'))

    //ADD BACKEND PLATEFORMS
    let new_backend_plateforms = null
    await new backendPlateforms({
        name: data.backend.plateform,
        version: data.backend.plateform_v
    }).save()
    .then(throwIf(r => {new_backend_plateforms = r; return !r}, 500, 'Add Backend Plateforms', 'Creating Backend Plateforms!'),
        throwError(500, 'Add Backend Plateforms', 'Creating Backend Plateforms!'))

    //ADD BACKEND FRAMEWORKS
    let new_backend_frameworks = null
    await new backendFrameworks({
        name: data.backend.framework,
        version: data.backend.framework_v
    }).save()
    .then(throwIf(r => {new_backend_frameworks = r; return !r}, 500, 'Add Backend Frameworks', 'Creating Backend Frameworks'),
        throwError(500, 'Add Backend Frameworks', 'Creating Backend Framework'))

    //ADD BACKEND LIBRARIES
    let new_backend_libraries = null
    await new backendLibraries({
        name: data.backend.libraries,
        version: data.backend.libraries
    }).save()
    .then(throwIf(r => {new_backend_libraries = r; return !r}, 500, 'Add Backend Libraries', 'Creating Backend Libraries'),
        throwError(500, 'Add Backend Libraries', 'Creating Backend Libraries'))

    //ADD THE LISTING
    console.log(new_backend_frameworks)
    const new_listing = await new ListingModel({
        title: data.title,
        summary: data.summary,
        description: data.description,
        plan: "5ae5500fd5f0e2442826d2ca",
        user: user._id,
        thumbnails: data.screenshots,
        technologies: {
            frontend: {
                plateforms: new_frontend_plateforms._id,
                frameworks: new_frontend_frameworks._id,
                libraries: new_frontend_libraries._id
            },
            backend: {
                plateforms: new_backend_plateforms._id,
                frameworks: new_backend_frameworks._id,
                libraries: new_backend_libraries._id
            }
        }
    }).save()
    .then(throwIf(r => !r, 500, 'Creating listing', 'Creating listing problem!'),
        throwError(500, 'Creating listing', 'creating listing problme'))
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


