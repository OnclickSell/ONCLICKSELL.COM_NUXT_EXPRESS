const express = require('express');
const router = express.Router();
import authController from '../controllers/authController'
import authMiddleware from '../middlewares/authMiddleware'
import userController from '../controllers/userController';
import auth from '../../packages/auth'
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


router.post('/signIn', async (req, res, next) => {
	try {
		const AuthController = new authController(req, res, next)
		return await AuthController.Authenticate()
	}catch(err) {
		console.log(err)
	}
})

router.post('/signUp', async (req, res, next) => {
	try {
		const Auth = new authController(req, res, next)
		return await Auth.SignUp()
	}catch(err) {
		console.log(err)
	}
})

router.post('/signUp/email_check', async (req, res, next) => {
	try {
		const UserController = new userController(req, res, next)
		return await UserController.DoesEmailExists(req.email)
	}catch(err) {
		console.log(err)
	}
})

module.exports = router;