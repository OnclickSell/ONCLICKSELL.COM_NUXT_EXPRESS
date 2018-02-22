
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
    .select('id','full_name', 'email', 'age', 'description', 'sex', 'password', 'profile_picture')
    .then(data => {
        if(!data.length > 0) {
            reject('whoops')
        }
        resolve(data[0])
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
        const detectSex = (sex) => {
            if(sex.toUpperCase() === 'MALE') {
                return 'http://res.cloudinary.com/onclicksell-com/image/upload/v1513505162/OnclickSell.com/Icons/Onclicksell.com-avatar-male-64px.svg'
            }else {
                return 'http://res.cloudinary.com/onclicksell-com/image/upload/v1513504833/OnclickSell.com/Icons/Conceptional-Avatar-Female-Final-Design.png'
            }
        }

        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if(err) {
                reject(err)
            } else {
        
                db('users')
                    .insert({
                    full_name: req.body.full_name,
                    email: req.body.email,
                    sex: req.body.sex,
                    profile_picture: detectSex(req.body.sex),
                    password: hash       
                   }).then(user => {
                        db('users').where('id', user).select('*').then(result => resolve(result[0]))
                        .catch(err => reject(err))
                   }).catch(err => reject(err))

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

exports.emailCheck = (email) => {
    return new Promise((resolve, reject) => {
        db('users').where('email', email).select('id')
       .then(result => {
           if(!result.length > 0) {
             resolve(result)
           }
           reject('The email already exists')
       })
       .catch(err => reject(err))
    })
}





