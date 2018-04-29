const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
import authMiddleware from '../middlewares/authMiddleware'
import AuthController from '../controllers/authController'
const adminMiddleware = require('../middlewares/adminMiddleware');
const wrapAsync = require('../../packages/wrapAsync')
const db = require('../../database/config');
const bcrypt = require('bcrypt');
import auth from '../../packages/auth'
import userModel from '../models/user'
import listingModel from '../models/listings';
import Validator from '../../packages/validator/index'
import PasswordReset from '../../packages/passwordReset/passwordReset'
import Mailer from '../../packages/mailer/mailer'
import ImageUploader from '../../packages/image_uploader/index'
import Formidable from 'formidable'
import mongoose from 'mongoose'
import PlansModel from '../models/plans'
// let validator = require('../../packages/validator');
// validator = new validator()
let uploader = require('../../packages/uploader')
uploader = new uploader('OnclickSell.com/', 'avatar', 2)

let sender = require('../../packages/sender')




// var formidable = require('formidable');

router.post('/resetPassword', async function(req, res, next) {
  try {
      const authController = new AuthController(req, res, next)
      return await authController.ResetPassword()
  }catch(err) {
    console.log(err)
  }
})





router.post('/signin', async (req, res, next) => {
  const test2 = new auth(req)
  console.log(await test2.Authenticate({email: req.body.email, password: req.body.password}))
})

router.post('/authcheck', async (req, res, next) => {
  const test2 = new auth(req)
  console.log(await test2.Check())
})

router.get('/getuser', async (req, res, next) => {
  try {
    const test2 = new userModel()
    // const user = await test2.FindBy('id', 2)
    console.log(await test2.Listings(await test2.FindBy('id', 2)))
      }catch(err) {
        console.log(err)
      }
  
})


router.post('/sendmail', async (req, res, next) => {
  try {
      const mailer = new Mailer()
      const result = await mailer.Send({text: 'fasfsafasfasf', to: 'aliakbar.su@hotmail.com'})
      console.log(result)
      }catch(err) {
        console.log(err)
      }
  
})

router.get('/updateuser', async (req, res, next) => {
  const test2 = new userModel()
  console.log(await test2.Update(2, {email: 'newsupdated@hotmail.com'}))
})

router.get('/createuser', async (req, res, next) => {
  
  try {
    const result = await PlansModel.find()
    console.log(result)
  }catch (err) {
    console.log(err)
  }
  
})

router.post('/validator', async (req, res, next) => {
  try{
    const validator = new Validator()
    const rules = {
      name: 'required|min:10',
      email: 'required|email',
      password: 'required|password',
      address: {
        street: 'required|min:50|max:60',
        test1: {
          working: 'required'
        }
      }
    }
    const result = validator.validate(rules, req.body)

    if(!result.status) {
      res.status(400).json(result.errors)
    }else { res.json('success') }
    

  }catch(err) {
    console.log(err)
  }
  
})

router.post('/uploadImage', async (req, res, next) => {
  try {
    console.log('fsfsf')
    const imageUploader = new ImageUploader(req)
    // const result = await imageUploader.Upload('/OnclickSell.com/Projects/Thumbnails')
    // const result = await imageUploader.Delete('OnclickSell.com/Projects/Thumbnails/upload_558dc970eed7daf6d47a351cc4aad8e2_dyhc0i')
    var form = new Formidable.IncomingForm();
    form.multiples = true;
    form.parse(req, async (err, fields, files) => {
        // const paresedData = JSON.parse(fields.data)
        console.log(fields)
    })

  }catch (err) {
    console.log(err)
  }
  
})




// router.get('/validator', async (req, res, next) => {
//   const test2 = new listingModel()
//   console.log(await test2.FindBy('id', 2))
// })






router.post('/upload', wrapAsync( async (req, res, next) => {

 try {

  const result = await uploader.upload(req)
  console.log(result)
 } catch(err) {
   console.log(err)
 }
  
  
  
}))

router.get('/mail', wrapAsync( async (req, res, next) => {

  try {
   const result = await sender.send('<h1>Hi</h1>', 'aliakbar.su@hotmail.com')
   console.log('email sent')
  } catch(err) {
    console.log(err)
  }
   
   
   
 }))


module.exports = router;