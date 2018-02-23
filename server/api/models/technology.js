
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

exports.add_technologies = (req, technology_details) => {
    const type = technology_details.technology
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
            .insert(technology_details)
            .then(result => { 
                resolve(result)})
            .catch(err => reject(err))
            break
            case "B_framework":
            db('backend_framework_list')
            .insert(technology_details)
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

exports.get_technologies = (req) => {
    let technologies = {
        frontend: {
            framework: '',
            plateforms: ''
        },
        backend: {
            framework: '',
            plateforms: ''
        }
    }
    return new Promise((resolve, reject) => {
        db('frontend_framework_list')
        .select('*')
        .then(F_framework => {
            technologies.frontend.framework = F_framework

            db('frontend_plateform_list')
            .select('*')
            .then(F_plateform => {
                technologies.frontend.plateforms = F_plateform
                db('backend_framework_list')
                .select('*')
                .then(B_framework => {
                    technologies.backend.framework = B_framework
                    db('backend_Plateform_list')
                    .select('*')
                    .then(B_plateform => {
                        technologies.backend.plateforms = B_plateform
                        resolve(technologies)
                    })
                    .catch(err => reject(err))
                })
                .catch(err => reject(err))
            })
            .catch(err => reject(err))
        })
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



