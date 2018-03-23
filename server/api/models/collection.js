const db = require('../../database/config');
const bcrypt = require('bcrypt');
import Model from './model'

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

export default class CollectionModel extends Model {
    constructor () {
        super()
        this.table = 'collection'
    }

    async AddToCollection(config) {
        return this.Create({
            user_id: config.user_id,
            listing_id: config.listing_id,
            created_at: this.timestamp,
            updated_at: this.timestamp
        })
    }

    async RemoveFromCollection(condition) {
        return await db(this.table).del().where(condition)
    }

    async GetUserCollections(userId) {
        return await db(this.table)
                    .select(this.fields)
                    .where('user_id', userId)
    }
}




