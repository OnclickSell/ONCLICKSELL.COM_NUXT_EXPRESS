
import Model from './model'
const bcrypt = require('bcrypt');
import TechnologyModel from './technology'
import Subscription from './subscription'
import Mongoose from 'mongoose'
const Schema = Mongoose.Schema

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



const LISTING_SCHEMA = {
    title: String,
    summary: String,
    description: String,
    plan: { type: Schema.Types.ObjectId, ref: 'Plans' },
    user: { type: Schema.Types.ObjectId, ref: 'Users' },
    thumbnails: [{}],
    codeSnippets: [{}],
    completed: Boolean,
    created_at: Date,
    updated_at: Date,
    technologies: {
        frontend: {
            frameworks: [{ type: Schema.Types.ObjectId, ref: 'frontendFrameworks' }],
            plateforms:[{ type: Schema.Types.ObjectId, ref: 'frontendPlateforms' }],
            libraries: [{ type: Schema.Types.ObjectId, ref: 'frontendLibraries' }]
        },
        backend: {
            frameworks: [{ type: Schema.Types.ObjectId, ref: 'backendFrameworks' }],
            plateforms:[{ type: Schema.Types.ObjectId, ref: 'backendPlateforms' }],
            libraries: [{ type: Schema.Types.ObjectId, ref: 'backendLibraries' }]
        }
    }
}

const listings = Mongoose.model('Listings', LISTING_SCHEMA)

export default listings
    













       
        // const technology = new TechnologyModel()
        // const subscription = new Subscription()
        // // console.log(data)
        // const CreatedListing = await this.Create({
        //     title: data.title,
        //     summary: data.summary,
        //     description: data.description,
        //     plan_id: data.plan.id,
        //     user_id: 1,
        //     thumbnail: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1515050579/OnclickSell.com/Photos/home-office-2452806_960_720.jpg',
        //     completed: 1,
        //     created_at: this.timestamp,
        //     updated_at: this.timestamp
        // })
        // await Promise.all([
        //     technology.CreateTechnology({...data, ...CreatedListing}),
        //     // subscription.CreateSubscription({...data, ...CreatedListing})
        // ])    





