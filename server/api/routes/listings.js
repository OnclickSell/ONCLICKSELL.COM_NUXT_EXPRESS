const express = require('express');
const router = express.Router();
const listingsController = require('../controllers/listingsController');
const authMiddleware = require('../middlewares/authMiddleware')


// router.post('/', (req, res, next) => {
//     return listingsController.test(req, res, next);
// });

router.get('/', listingsController.get_listings);
router.get('/:id/:title', listingsController.get_single_listing);
router.post('/', listingsController.create_listing);
router.put('/:id', authMiddleware, listingsController.update_single_listings);
router.delete('/:id', authMiddleware, listingsController.delete_single_listings);
router.get('/technologies/fetch', listingsController.fetch_technologies);

module.exports = router;