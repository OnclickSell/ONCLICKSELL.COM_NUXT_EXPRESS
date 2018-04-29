
const plansModel = require('../models/plans');
import Responser from '../../packages/responser'
const wrapAsync = require('../../packages/wrapAsync')
let validator = require('../../packages/validator');
validator = new validator()
import Controller from './controller'
import PlanModel from '../models/plans'
import { CreatePlan } from '../../packages/payment/index'
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
            const that = this
            PlanModel.find((err, plans) => {
                if(err) throw err
                Responser.send(that.response, 200, "Success", plans)
            })
        }catch(err) {
            throw {type: "InternalServerError", message: "Something went wrong with the server. Please try again"}
        }
    }

    async CreatePlan() {
        try {
            const { data } = await CreatePlan(this.request.body)
            if(data.error) throw data.error
            const newPlan = new PlanModel({ 
                id: data.id,
                created: data.created,
                objectType: data.objectType,
                amount: data.amount,
                currency: data.currency,
                interval: data.interval,
                intervalCount: data.intervalCount,
                billingCycles: data.billingCycles,
                name: data.name,
                trialPeriodDays: data.trialPeriodDays,
                recursTo: data.recursTo,
                metadata: data.metadata
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



