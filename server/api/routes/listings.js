const express = require('express');
const router = express.Router();
import listingsController from '../controllers/listingsController'
import authMiddleware from '../middlewares/authMiddleware'


// router.post('/', (req, res, next) => {
//     return listingsController.test(req, res, next);
// });

// router.get('/', listingsController.get_listings);
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
// router.put('/:id', authMiddleware, listingsController.update_single_listings);
// router.delete('/:id', authMiddleware, listingsController.delete_single_listings);
// router.get('/technologies/fetch', listingsController.fetch_technologies);

module.exports = router;