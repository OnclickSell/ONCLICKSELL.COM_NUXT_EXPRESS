

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

exports.get_plans = () => {
    return new Promise((resolve, reject) => {
        db('plan')
        .select('*')
        .then(value => resolve(value))
        .catch(err => reject(err))   
    })
    // return new Promise((resolve, reject) => {
        
    // })
    // if (limit > 50) {
    //     limit = 50
    // }
    // db('listings')
    // // .orderBy(order, 'asc')
    // .limit(+limit)
    // .offset(+offset)
    // .leftJoin('review', 'listings.id', '=', 'review.listing_id')
    // .join('users', 'listings.id', '=', 'listings.user_id')
    // .select([
    //     'listings.id',
    //     'title',
    //     'users.sex',
    //     'users.id'
    // ])
    // .then(value => callback('', value))
    // .catch(err => callback(err, ''))   
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

exports.create_single_listings = (req, callback) => {
        
    db('listings').insert({

        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        profile_picture: 'fafsafsf',
        password: req.body.password

    }).asCallback((err) => callback(err));
        
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


