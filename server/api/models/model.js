const db = require('../../database/config');

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

export default class Model {
    constructor (fields) {
        this.table = ''
        this.fields = fields || '*'
    }

    /*
    |--------------------------------------------------------------------------
    | Add a new record in the database
    |--------------------------------------------------------------------------
    |
    */

    async Create (Details) {
        try {
            const result = await db(this.table).insert(Details)
            return this.FindBy('id', result)
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

    GetFieldValue (field, value) {
        try {
                return db(this.table).where(field, value)
                .select(this.fields).first()
        } catch(err) {
            throw { type: "BadRequest", message: err.message }
        }
        
    }

    async FindBy (field, value) {
      try {
        return await this.GetFieldValue(field, value)
      }catch(err) {
          return false
      }
      
    }

    /*
    |--------------------------------------------------------------------------
    | Update record in the database based on id passed as parameter
    |--------------------------------------------------------------------------
    |
    */

    async GetAll(limit, offset, order) {
        try {
            return await db(this.table)
            .orderBy(order, 'asc')
            .limit(+limit)
            .offset(+offset)
            .select(this.fields)
        }catch(err) {
            return false
        }
    }


    /*
    |--------------------------------------------------------------------------
    | Update record in the database based on id passed as parameter
    |--------------------------------------------------------------------------
    |
    */

    async Update (id, newDetails) {
       try {
         const result = await db(this.table).where('id', +id).first().update(newDetails)
         return this.FindBy('id', id)
       } catch(err) {
          throw { type: "BadRequest", message: err.message }
       }
    }

    /*
    |--------------------------------------------------------------------------
    | Delete record in the database based on id passed as parameter
    |--------------------------------------------------------------------------
    |
    */

    async Delete (id) {
        try {
          await db(this.table).del().where('id', +id )
          return true
        } catch(err) {
           throw { type: "BadRequest", message: err.message }
        }
    }


}