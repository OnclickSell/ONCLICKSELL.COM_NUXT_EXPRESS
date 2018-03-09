const express = require('express')
const router = express.Router()
const reviewsController = require('../controllers/reviewsController')
import authMiddleware from '../middlewares/authMiddleware'
  

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

router.get('/', reviewsController.get_reviews);
// router.get('/:id', authMiddleware, userController.get_review);
router.post('/', reviewsController.add_reviews);
router.put('/:id', reviewsController.update_reviews)
router.delete('/:id', reviewsController.delete_reviews);

module.exports = router;