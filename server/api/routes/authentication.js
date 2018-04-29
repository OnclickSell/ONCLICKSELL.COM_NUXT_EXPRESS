const express = require('express');
const router = express.Router();
import authController from '../controllers/authController'
import authMiddleware from '../middlewares/authMiddleware'
import userController from '../controllers/userController';
import Auth from '../../packages/auth'
import userModel from '../models/user';
var ExpressBrute = require('express-brute');

var store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
var bruteforce = new ExpressBrute(store, {
    freeRetries: 1000,
	attachResetToRequest: true,
	refreshTimeoutOnRequest: true,
	minWait: 25*60*60*1000, // 1 day 1 hour (should never reach this wait time)
	maxWait: 25*60*60*1000, // 1 day 1 hour (should never reach this wait time)
	lifetime: 24*60*60, // 1 day (seconds not milliseconds)
});

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


router.post('/signIn', async (req, res, next) => {
	try {
		const AuthController = new authController(req, res, next)
		return await AuthController.Authenticate()
	}catch(err) {
		next(err)
		console.log(err)
	}
})

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

router.post('/signUp', async (req, res, next) => {
	try {
		const auth = new authController(req, res, next)
		return await auth.SignUp()
	}catch(err) {
		next(err)
		console.log(err, 'from auth router')
	}
})

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

router.post('/reset-password', async (req, res, next) => {
	try {
		const AuthController = new authController(req, res, next)
		return await AuthController.ResetPassword()
	}catch(err) {
	  console.log(err)
	}
})

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

// router.get('/reset-password', async (req, res, next) => {
// 	try {
// 		const AuthController = new authController(req, res, next)
// 		return await AuthController.ValidatePasswordResetToken()
// 	}catch(err) {
// 	  console.log(err)
// 	}
// })

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

router.post('/set-new-password', async (req, res, next) => {
	try {
		const AuthController = new authController(req, res, next)
		return await AuthController.SetNewPassword()
	}catch(err) {
	throw { type: "BadRequest", message: err.message }
	  console.log(err)
	}
})

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

router.post('/signUp/email_check', async (req, res, next) => {
	try {
		const UserController = new userController(req, res, next)
		return await UserController.DoesEmailExists(req.email)
	}catch(err) {
		console.log(err)
	}
})

module.exports = router;