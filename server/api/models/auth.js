
const db = require('../../database/config');
const bcrypt = require('bcrypt');
const gender_detect = require('../../packages/detect_profile');
const wrapAsync = require('../../packages/wrapAsync')

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

exports.signIn = (req) => {
    return new Promise((resolve, reject) => {

    db("users").where('email', req.body.email)
    .select('id','full_name', 'email', 'age', 'description', 'sex', 'password')
    .then(data => {
        if(!data.length > 0) {
            reject(new Error('woops'))
        }
        resolve(data)
    })
    .catch(err => reject(err))
})
}

/*
|--------------------------------------------------------------------------
| Create a new user and add to database
|--------------------------------------------------------------------------
|
| The below function create a new record in the database and add the new created user
|
*/

exports.signUp = (req) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if(err) {
                reject(err)
            } else {
    
                db('users')
                .insert({
                    full_name: req.body.full_name,
                    email: req.body.email,
                    sex: req.body.sex,
                    password: hash       
                })
                .then(result => {
                    db("users").where('email', req.body.email )
                    .select(
                    'id',
                    'full_name',
                    'email',
                    'description',
                    'age',
                    'profile_picture'
                    ).then(result => resolve(result))
                    .catch(err => reject(err))
                })
                .catch(err => reject(err))
            }
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

exports.roles = (email, callback) => {
    const user = db('users').join('role_users', 'users.id', '=', 'role_users.user_id').join('roles', 'roles.id', '=', 'role_users.role_id').where('email', email).select('*').asCallback((err) => callback(err, user));       
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

exports.emailCheck = (email, callback) => {
    db('users').where('email', email).select('id')
    .then(result => callback('', result))
    .catch(err => callback(err, ''))
}





