const db = require('../../database/config');
const bcrypt = require('bcrypt');
const auth = require('../../packages/auth');
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

export default class technologyModel extends Model {
    constructor (fields) {
        super()
        this.table = 'technology'
        this.fields = fields || '*'
    }

    async CreateTechnology(data) {
        const CreatedTechnology = await this.Create({
            listing_id: data.id,
            html: data.frontend.html,
            css: data.frontend.css,
            created_at: this.timestamp,
            updated_at: this.timestamp
        })
        
        await db('frontend_plateform').insert({
            frontend_plateform_id: data.frontend.plateform,
            technology_id: CreatedTechnology.id,
            created_at: this.timestamp,
            updated_at: this.timestamp
        })

        await db('frontend_framework').insert({
            frontend_framework_id: data.frontend.framework,
            technology_id: CreatedTechnology.id,
            created_at: this.timestamp,
            updated_at: this.timestamp
        })

        await db('frontend_libraries').insert({
            technology_id: CreatedTechnology.id,
            name: data.frontend.libraries,
            version: data.frontend.libraries,
            created_at: this.timestamp,
            updated_at: this.timestamp
        })



        await db('backend_plateform').insert({
            backend_plateform_id: data.backend.plateform,
            technology_id: CreatedTechnology.id,
            created_at: this.timestamp,
            updated_at: this.timestamp
        })

        await db('backend_framework').insert({
            backend_framework_id: data.backend.framework,
            technology_id: CreatedTechnology.id,
            created_at: this.timestamp,
            updated_at: this.timestamp
        })

        await db('backend_libraries').insert({
            technology_id: CreatedTechnology.id,
            name: data.backend.libraries,
            version: data.backend.libraries,
            created_at: this.timestamp,
            updated_at: this.timestamp
        })
        
        
    }

    async GetTechnologies() {
        return Promise.all([
            db('frontend_framework_list').select('*'),
            db('frontend_plateform_list').select('*'),
            db('frontend_libraries_list').select('*'),
            db('technology_html').select('*'),
            db('technology_css').select('*'),
            db('backend_framework_list').select('*'),
            db('backend_Plateform_list').select('*'),
            db('backend_libraries_list').select('*')
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

exports.update_technologies = (req, technology_details) => {
    const type = technology_details.technology
    const id = technology_details.id
    technology_details = {
        name: technology_details.name,
        version: technology_details.version,
        created_at: technology_details.created_at,
        updated_at: technology_details.updated_at
    }
    return new Promise((resolve, reject) => {
        switch(type) {
            case "F_framework":
            db('frontend_framework_list')
            .where('id', id)
            .update(technology_details)
            .then(result => { 
                resolve(result)})
            .catch(err => reject(err))
            break
            case "B_framework":
            db('backend_framework_list')
            .where('id', id)
            .update(technology_details)
            .then(result => resolve(result))
            .catch(err => reject(err))
            break
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

exports.delete_technologies = (req, technology_details, id) => {
    return new Promise((resolve, reject) => {
        switch(technology_details.technology) {
            case "F_framework":
            db('frontend_framework_list')
            .where('id', id)
            .del()
            .then(result => { 
                resolve(result)})
            .catch(err => reject(err))
            break
            case "B_framework":
            db('backend_framework_list')
            .where('id', id)
            .del()
            .then(result => resolve(result))
            .catch(err => reject(err))
            break
        }
    })     
}



