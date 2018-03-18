
import ListingsModel from '../models/listings'
import CollectionModel from '../models/collection'
import Auth from '../../packages/auth'
const responser = require('../../packages/responser')
let validator = require('../../packages/validator');
validator = new validator()
import Controller from './controller'


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


    async AddToCollection() {
        try {
            const AuthToken = this.request.query.token
            const auth = new Auth(this.request)
            const User = await auth.GetAuth()

            const listingsModel = new ListingsModel()
            const ListingId = this.request.params.id
            const Listing = await listingsModel.FindBy('id', ListingId)
            
            const collectionModel = new CollectionModel()
            await collectionModel.AddToCollection({user_id: User.id, listing_id: Listing.id})
            responser.send(this.response, 200, "Success")
        }catch(err) {
            console.log(err)
            responser.send(this.response, 500, "Failed", 'Something went wrong on the server. Try again')
        }
    }

    async RemoveFromCollection() {
        try {
            const collectionId = this.request.params.id
            const collectionModel = new CollectionModel()
            const result = collectionModel.FindBy('id', collectionId)
            await collectionModel.Delete(collectionId)
            responser.send(this.response, 200, "Success")
        }catch(err) {
            responser.send(this.response, 500, "Failed", 'Something went wrong on the server. Try again')
        }
    }

    async GetCollection() {
        try {
            const config = {
                limit: this.request.query.limit,
                offset: this.request.query.offset,
                order: this.request.query.order
            }
            const collectionModel = new CollectionModel()
            const result = await collectionModel.GetAll(config.limit, config.offset, config.order)
            responser.send(this.response, 200, "Success", result)
        }catch(err) {
            responser.send(this.response, 500, "Failed", 'Something went wrong on the server. Try again')
        }
    }
}



