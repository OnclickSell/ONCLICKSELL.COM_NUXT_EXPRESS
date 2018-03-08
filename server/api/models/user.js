
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

export default class userModel {
    constructor (fields) {
        this.table = 'users'
        this.fields = fields || '*'
    }

    /*
    |--------------------------------------------------------------------------
    | Create a new user in the Database. Details are passed in the args
    |--------------------------------------------------------------------------
    |
    */

    async CreateUser (userDetails) {
        try {
            const createdUser = await db(this.table).insert(userDetails)
            console.log(createdUser)
            return this.GetUserById(createdUser)
        } catch(err) {
            throw { type: "BadRequest", message: err.message }
        }
        
    }


    /*
    |--------------------------------------------------------------------------
    | Get users in the Database based on the indentifier passed as args
    |--------------------------------------------------------------------------
    |
    */

    GetUserFieldValue (field, value) {
        try {
                return db(this.table).where(field, value)
                .select(this.fields).first()
        } catch(err) {
            throw { type: "BadRequest", message: err.message }
        }
        
    }

    GetUserById (id) {
      return this.GetUserFieldValue('id', id)
    }

    GetUserByName (name) {
        return this.GetUserFieldValue('name', name)
    }

    GetUserByEmail (email) {
        return this.GetUserFieldValue('email', email)
    }

    GetUsers () {
        try {
            return db.select(this.fields)
            .from(this.table)
        }catch (err) {
            throw { type: "BadRequest", message: err.message }
        }
    }

    /*
    |--------------------------------------------------------------------------
    | Update users in the Database based on their id passed as parameter
    |--------------------------------------------------------------------------
    |
    */

    async UpdateUser (id, newDetails) {
       try {
         const updatedUser = await db(this.table).where('id', +id).first().update(newDetails)
         return this.GetUserById(id)
       } catch(err) {
          throw { type: "BadRequest", message: err.message }
       }
    }

    /*
    |--------------------------------------------------------------------------
    | Update users in the Database based on their id passed as parameter
    |--------------------------------------------------------------------------
    |
    */

    async DeleteUser (id) {
        try {
          await db(this.table).del().where('id', +id )
          return true
        } catch(err) {
           throw { type: "BadRequest", message: err.message }
        }
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

exports.get_auth_user = (req) => {
    return new Promise((resolve, reject) => {
        auth.getUser(req, ['*']).then(result => resolve(result)).catch(err => reject(err))
    
            //  resolve({
            //     age:null,
            //     card_brand:null,
            //     card_last_four:null,
            //     created_at:null,
            //     description:null,
            //     email:"random11110@hotmail.com",
            //     full_name:"sfasfasf",
            //     id:109,
            //     last_login:null,
            //     password:"$2a$10$ZSuPd7PSxDpciJ9Ej66tl.nL7D.SWExgUm3cM8jcUmlTImoE114na",
            //     permissions:null,
            //     profile_picture:"http://res.cloudinary.com/onclicksell-com/image/upload/v1513504833/OnclickSell.com/Icons/Conceptional-Avatar-Female-Final-Design.png",
            //     sex:"female",
            //     stripe_id:null,
            //     trial_ends_at:null,
            //     updated_at:null
            // })
   
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

exports.update_user_details = (req, data) => {
    return new Promise((resolve, reject) => {
        db('users')
        .where('id', +1)
        .update(data)
        .then(result => resolve(data))
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

exports.update_user_avatar = (req, url) => {
    return new Promise((resolve, reject) => {
        db('users')
        .where('id', +1)
        .update('profile_picture', url)
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


