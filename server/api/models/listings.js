
import Model from './model'
const db = require('../../database/config');
const bcrypt = require('bcrypt');
import TechnologyModel from './technology'
import Subscription from './subscription'

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


export default class listingModel extends Model {
    constructor (fields) {
        super()
        this.table = 'listings'
        this.fields = fields || '*'
    }

    async GetUserListings(userId) {
        return await db(this.table)
                .select(this.fields)
                .where('user_id', userId)
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

    async CreateListing(data) {
        const technology = new TechnologyModel()
        const subscription = new Subscription()
        // console.log(data)
        const CreatedListing = await this.Create({
            title: data.title,
            summary: data.summary,
            description: data.description,
            plan_id: data.plan.id,
            user_id: 1,
            thumbnail: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1515050579/OnclickSell.com/Photos/home-office-2452806_960_720.jpg',
            completed: 1,
            created_at: this.timestamp,
            updated_at: this.timestamp
        })
        await Promise.all([
            technology.CreateTechnology({...data, ...CreatedListing}),
            subscription.CreateSubscription({...data, ...CreatedListing})
        ])    
    }

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

exports.create_listing = (data) => {

    const dateNow =  new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    return new Promise( async(resolve, reject) => {
        try {
            await db('frontend_framework_list').where('id', data.frontend.framework.id).select('*')
            await db('frontend_plateform_list').where('id', data.frontend.plateform.id).select('*')
            // await db('frontend_libraries_list').where('id', data.technologies.frontend.libraries.id).select('*')
            await db('backend_framework_list').where('id', data.backend.framework.id).select('*')
            await db('backend_plateform_list').where('id', data.backend.plateform.id).select('*')
            // await db('backend_libraries_list').where('id', data.technologies.backend.libraries.id).select('*')
        }catch(err) {
            reject('Your request contains invalid data')
        }

        try {

            const listing = await db('listings')
            .insert({
                title: data.title,
                summary: data.summary,
                description: data.description,
                plan_id: data.plan.id,
                completed: 1,
                user_id: 1,
                thumbnail: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1515050579/OnclickSell.com/Photos/home-office-2452806_960_720.jpg',
                created_at: dateNow,
                updated_at: dateNow
            })

            const technologies = await db('technology')
            .insert({
                listing_id: listing[0],
                html: 'HTML 5.0',
                css: 'CSS 3.0',
                created_at: dateNow,
                updated_at: dateNow
            })

            await db('frontend_framework')
            .insert({
                frontend_framework_id: data.frontend.framework.id,
                technology_id: technologies[0],
                created_at: dateNow,
                updated_at: dateNow
            })

            await db('frontend_plateform')
            .insert({
                frontend_plateform_id: data.frontend.plateform.id,
                technology_id: technologies[0],
                created_at: dateNow,
                updated_at: dateNow
            })

            await db('backend_framework')
            .insert({
                backend_framework_id: data.backend.framework.id,
                technology_id: technologies[0],
                created_at: dateNow,
                updated_at: dateNow
            })

            await db('backend_plateform')
            .insert({
                backend_plateform_id: data.backend.plateform.id,
                technology_id: technologies[0],
                created_at: dateNow,
                updated_at: dateNow
            })

            resolve('Success')
        }catch(err) {
            reject('Your request contains invalid data')
        }
    })
        
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

exports.update_single_listings = (id, data, callback) => {
    db.update({
        first_name: data.name,
        last_name: data.last_name,
        description: data.description,
        email: data.email
    }).from('listings').where({ id: id }).asCallback((err, value) => callback(err, value));       
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

exports.delete_single_listings = (id, callback) => {
    db.del().from('listings').where({ id: id }).asCallback((err, value) => callback(err, value));       
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

exports.fetch_technologies = () => {
    return new Promise((resolve, reject) => {
        let frontend_plateform, backend_plateform
        db('frontend_plateform_list')
        .select('*')
        .then(result => {
            frontend_plateform = result
           db('backend_plateform_list')
            .select('*')
            .then(result => {
                backend_plateform = result
                resolve({
                    frontend_plateform: frontend_plateform,
                    backend_plateform: backend_plateform
                })
            })
        })
        .catch(err => reject(err))
    })
}


