const express = require('express');
const router = express.Router();
import AdminController from '../controllers/adminControllers'
import AuthMiddleware from '../middlewares/authMiddleware'




/*
|--------------------------------------------------------------------------
| GENERAL ROUTES
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/


router.get('/', async (req, res, next) => {
	try {
        const adminController = new AdminController(req, res, next)
        return adminController.InitAdminPanel()
	}catch(err) {
		next(err)
		console.log(err)
	}
})


/*
|--------------------------------------------------------------------------
| PRODUCT SECTION
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/


router.post('/createProduct', async (req, res, next) => {
	// try {
    //     const adminControllers = new AdminControllers
    //     return adminContrller.CreateProduct();
	// }catch(err) {
	// 	next(err)
	// 	console.log(err)
	// }
})

router.get('/GetProducts', AuthMiddleware, async (req, res, next) => {
	try {
        const adminController = new AdminController(req, res, next)
        return await adminController.GetAllProducts()
	}catch(err) {
		next(err)
		console.log(err)
	}
})


router.post('/GetProducts', AuthMiddleware, async (req, res, next) => {
	try {
        const adminController = new AdminController(req, res, next)
        return await adminController.GetProduct(req.body.productId)
	}catch(err) {
		next(err)
		console.log(err)
	}
})

/*
|--------------------------------------------------------------------------
| PLANS SECTION
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

router.post('/CreatePlan', AuthMiddleware, async (req, res, next) => {
	try {
        const adminController = new AdminController(req, res, next)
        return await adminController.CreatePlan()
	}catch(err) {
		next(err)
		console.log(err)
	}
})

/*
|--------------------------------------------------------------------------
| CUSTOMERS SECTION
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/


router.post('/createCustomer', AuthMiddleware, async (req, res, next) => {
	try {
        const adminController = new AdminController(req, res, next)
        return adminController.CreateCustomer()
	}catch(err) {
		next(err)
		console.log(err)
	}
})

/*
|--------------------------------------------------------------------------
| SUBSCRIPTIONS SECTION
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

router.post('/CreateSubscription', AuthMiddleware, async (req, res, next) => {
	try {
        const adminController = new AdminController(req, res, next)
        return await adminController.CreateSubscription()
	}catch(err) {
		next(err)
		console.log(err)
	}
})



module.exports = router;