const express = require('express');
const router = express.Router();
import authMiddleware from '../middlewares/authMiddleware'
import PlansController from '../controllers/plansController'


// router.post('/', (req, res, next) => {
//     return listingsController.test(req, res, next);
// });

router.get('/', async (req, res, next) => {
    try {
        const plansController = new PlansController(req, res, next)
        return plansController.GetPlans()
    }catch(err) {
        console.log(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const plansController = new PlansController(req, res, next)
        return plansController.CreatePlan()
    }catch(err) {
        console.log(err)
    }
})

module.exports = router;