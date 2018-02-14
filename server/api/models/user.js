
const db = require('../../database/config');
const bcrypt = require('bcrypt');
const auth = require('../../packages/auth');

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

exports.get_all_users = (callback) => {
    db.select("*").from("users").asCallback((err, value) => callback(err, value));       
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

exports.get_single_user = (id, callback) => {
    db.select('*').from('users').where({ id: id }).asCallback((err, value) => callback(err, value));       
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

exports.get_auth_user = (id) => {
    return new Promise((resolve, reject) => {
    db('users')
    .select('*')
    .where('id', +1 )
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

exports.update_single_user = (req) => {
    return new Promise((resolve, reject) => {
        if (req.body.password) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    reject(err)
                } else {
                    console.log(req.body.loginDeails + 'from user update model')
                    db('users')
                    .where('id', 1 )
                    .update({
                        password: hash,
                        age: req.body.age,
                        description: req.body.description,
                        profile_picture: req.body.profile_picture
                    })
                    .then(result => {
                        db('users')
                        .select('*')
                        .where('id', 1 )
                        .then(result => resolve(result))
                        .catch(err => reject(err))
                    })
                    .catch(err => reject(err))
                }
            })
        } else {
            console.log(req.body.password + 'from user update model')
            db('users')
            .where('id', 1 )
            .update({
                age: req.body.age,
                description: req.body.description,
                profile_picture: req.body.profile_picture
            })
            .then(result => {
                db('users')
                .select('*')
                .where('id', 1 )
                .then(result => resolve(result))
                .catch(err => reject(err))
            })
            .catch(err => reject(err))
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

exports.update_user_password = (req) => {
    
    return new Promise((resolve, reject) => {
        auth.getUser(req, 'id').then(id => {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    reject(err)
                } else {
                    db('users')
                    .where('id', +id )
                    .update({
                        password: hash
                    })
                    .then(result => {
                        db('users')
                        .select('*')
                        .where('id', +id )
                        .then(result => resolve(result))
                        .catch(err => reject(err))
                    })
                    .catch(err => reject(err))
                }
            })
        }) 
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

exports.delete_single_user = (id, callback) => {
    db.del().from('users').where({ id: id }).asCallback((err, value) => callback(err, value));       
}

exports.add_user_profile = (req) => {
    return new Promise((resolve, reject) => {
        db('users')
        .where('id', +req.body.id )
        .update({
            description: req.body.description,
            profile_picture: req.body.profile_picture
        })
        .then(result => resolve(result))
        .catch(err => reject(err))
    })     
}


exports.update_profile_picture = (req, user_avatar) => {
    return new Promise((resolve, reject) => {
        db('users')
        .where('id', +req.body.id )
        .update({
            profile_picture: user_avatar
        })
        .then(result => resolve(result))
        .catch(err => reject(err))
    })     
}


