const express = require('express');
const router = express.Router();
import listingsController from '../controllers/listingsController'
import authMiddleware from '../middlewares/authMiddleware'



router.get('/:id/:title', async (req, res, next) => {
    try {
        const ListingsController = new listingsController(req, res, next)
        return await ListingsController.FindById()
    }catch(err) {
        console.log(err)
    }
    
})

router.get('/', async (req, res, next) => {
    try {
        const ListingsController = new listingsController(req, res, next)
        return await ListingsController.GetListings()
    }catch(err) {
        console.log(err)
    }
    
})
router.post('/', authMiddleware, async (req, res, next) => {
    try {
        console.log(req.body)
        const ListingsController = new listingsController(req, res, next)
        return await ListingsController.CreateListing()
    }catch(err) {
        console.log(err)
    }
    
})

module.exports = router;