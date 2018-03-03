

const db = require('../../database/config');
const bcrypt = require('bcrypt');

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

exports.get_all_listings = (offset, limit, order, callback) => {
    // return new Promise((resolve, reject) => {
        
    // })
    if (limit > 50) {
        limit = 50
    }
    db('listings')
    // .orderBy(order, 'asc')
    .limit(+limit)
    .offset(+offset)
    .leftJoin('review', 'listings.id', '=', 'review.listing_id')
    .join('users', 'listings.id', '=', 'listings.user_id')
    .select([
        'listings.id',
        'title',
        'users.sex',
        'users.id'
    ])
    .then(value => callback('', value))
    .catch(err => callback(err, ''))   
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

exports.get_single_listing = (payload, callback) => {
    return new Promise((resolve, reject) => {
        db.select([
            'id',
            'title',
            'description',
            'summary'
        ]).from('listings').where({ id: payload.id, title: payload.title })
        .then(result => resolve(result))
        .catch(err => reject(err))
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

exports.create_listing = (data) => {

    const dateNow =  new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    return new Promise( async(resolve, reject) => {
        try {
            await db('frontend_framework_list').where('id', data.technologies.frontend.framework.id).select('*')
            await db('frontend_plateform_list').where('id', data.technologies.frontend.plateform.id).select('*')
            // await db('frontend_libraries_list').where('id', data.technologies.frontend.libraries.id).select('*')
            await db('backend_framework_list').where('id', data.technologies.backend.framework.id).select('*')
            await db('backend_plateform_list').where('id', data.technologies.backend.plateform.id).select('*')
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
                frontend_framework_id: data.technologies.frontend.framework.id,
                technology_id: technologies[0],
                created_at: dateNow,
                updated_at: dateNow
            })

            await db('frontend_plateform')
            .insert({
                frontend_plateform_id: data.technologies.frontend.plateform.id,
                technology_id: technologies[0],
                created_at: dateNow,
                updated_at: dateNow
            })

            await db('backend_framework')
            .insert({
                backend_framework_id: data.technologies.backend.framework.id,
                technology_id: technologies[0],
                created_at: dateNow,
                updated_at: dateNow
            })

            await db('backend_plateform')
            .insert({
                backend_plateform_id: data.technologies.backend.plateform.id,
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


