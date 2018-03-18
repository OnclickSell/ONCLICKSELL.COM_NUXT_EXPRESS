
const plansModel = require('../models/plans');
const responser = require('../../packages/responser')
const wrapAsync = require('../../packages/wrapAsync')
let validator = require('../../packages/validator');
validator = new validator()
import Controller from './controller'
import PlanModel from '../models/plans'

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
export default class PlansController extends Controller {
    async GetPlans() {
        try {
            const config = {
                limit: this.request.query.limit,
                offset: this.request.query.offset,
                order: this.request.query.order
            }
            const planModel = new PlanModel()
            const result = await planModel.GetAll(config.limit, config.offset, config.order)
            responser.send(this.response, 200, "Success", result)
        }catch(err) {
            throw {type: "InternalServerError", message: "Something went wrong with the server. Please try again"}
        }
    }
}




