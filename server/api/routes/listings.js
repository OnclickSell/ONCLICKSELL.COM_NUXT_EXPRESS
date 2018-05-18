import express from 'express'
const router = express.Router();
import listingsController from '../controllers/listingsController'
import authMiddleware from '../middlewares/authMiddleware'
import { asyncMiddleware } from '../../packages/utils'



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


router.get('/initSellPages', asyncMiddleware((req, res, next) => {
    const ListingsController = new listingsController(req, res, next)
    return ListingsController.InitSellPages()
}))



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


router.get('/:id/:title', asyncMiddleware((req, res, next) => {
    const ListingsController = new listingsController(req, res, next)
    return ListingsController.FindById()
}))



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


router.get('/', asyncMiddleware((req, res, next) => {
    const ListingsController = new listingsController(req, res, next)
    return ListingsController.GetListings()
}))


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

router.post('/', authMiddleware, asyncMiddleware((req, res, next) => {
    const ListingsController = new listingsController(req, res, next)
    return ListingsController.CreateListing()
}))



module.exports = router;