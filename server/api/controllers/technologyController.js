
const technologyModel = require('../models/technology');
import auth from '../../packages/auth'
const wrapAsync = require('../../packages/wrapAsync')
let validator = require('../../packages/validator');
import Responser from '../../packages/responser'
validator = new validator()
import Controller from './controller'
import {
    frontendPlateformsList,
    frontendFrameworksList,
    frontendLibrariesList,
    backendPlateformsList,
    backendFrameworksList,
    backendLibrariesList
} from '../models/technology'





export default class TechnologyController extends Controller {
    async GetTechnology () {
        let technologies = {
            frontend: {
                framework: '',
                plateforms: '',
                libraries: '',
                html: '',
                css: ''
            },
            backend: {
                framework: '',
                plateforms: ''
            }
        }
        try {
            const technologyModel = new TechnologyModel()
            const response = await technologyModel.GetTechnologies()
            technologies.frontend.framework = response[0]
            technologies.frontend.plateforms = response[1]
            technologies.frontend.libraries = response[2]
            technologies.frontend.html = response[3]
            technologies.frontend.css = response[4]
            technologies.backend.framework = response[5]
            technologies.backend.plateforms = response[6]
            responser.send(this.response, 200, "Success", technologies)
        }catch(err) {
            console.log(err)
        }
    }

    /*
    |--------------------------------------------------------------------------
    | FRONTEND SECTION
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application. This value is used when the
    | framework needs to place the application's name in a notification or
    | any other location as required by the application or its packages.
    |
    */
    async AddFrontendPlateforms() {
        try {
            const newPlan = new frontendPlateformsList({ 
                name: this.request.body.name,
                version: this.request.body.version
             })
             const that = this
             newPlan.save(function (err, plan) {
                if (err) return console.error(err);
                Responser.send(that.response, 200, "Success", plan)
              })
            
        }catch(err) {
            console.log(err)
        }
    }

    async AddFrontendFrameworks() {
        try {
            const newPlan = new frontendFrameworksList({ 
                name: this.request.body.name,
                version: this.request.body.version
             })
             const that = this
             newPlan.save(function (err, plan) {
                if (err) return console.error(err);
                Responser.send(that.response, 200, "Success", plan)
              })
            
        }catch(err) {
            console.log(err)
        }
    }

    async AddFrontendLibraries() {
        try {
            const newPlan = new frontendLibrariesList({ 
                name: this.request.body.name,
                version: this.request.body.version
             })
             const that = this
             newPlan.save(function (err, plan) {
                if (err) return console.error(err);
                Responser.send(that.response, 200, "Success", plan)
              })
            
        }catch(err) {
            console.log(err)
        }
    }

    /*
    |--------------------------------------------------------------------------
    | BACKEND SECTION
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application. This value is used when the
    | framework needs to place the application's name in a notification or
    | any other location as required by the application or its packages.
    |
    */
    async AddBackendPlateforms() {
        try {
            const newPlan = new backendPlateformsList({ 
                name: this.request.body.name,
                version: this.request.body.version
             })
             const that = this
             newPlan.save(function (err, plan) {
                if (err) return console.error(err);
                Responser.send(that.response, 200, "Success", plan)
              })
            
        }catch(err) {
            console.log(err)
        }
    }

    async AddBackendFrameworks() {
        try {
            const newPlan = new backendFrameworksList({ 
                name: this.request.body.name,
                version: this.request.body.version
             })
             const that = this
             newPlan.save(function (err, plan) {
                if (err) return console.error(err);
                Responser.send(that.response, 200, "Success", plan)
              })
            
        }catch(err) {
            console.log(err)
        }
    }

    async AddBackendLibraries() {
        try {
            const newPlan = new backendLibrariesList({ 
                name: this.request.body.name,
                version: this.request.body.version
             })
             const that = this
             newPlan.save(function (err, plan) {
                if (err) return console.error(err);
                Responser.send(that.response, 200, "Success", plan)
              })
            
        }catch(err) {
            console.log(err)
        }
    }
}






