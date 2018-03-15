const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
import authMiddleware from '../middlewares/authMiddleware'
const adminMiddleware = require('../middlewares/adminMiddleware');
const wrapAsync = require('../../packages/wrapAsync')
const db = require('../../database/config');
const bcrypt = require('bcrypt');
import auth from '../../packages/auth'
import userModel from '../models/user'
import listingModel from '../models/listings';
import Validator from '../../packages/validator/validator'
// let validator = require('../../packages/validator');
// validator = new validator()
let uploader = require('../../packages/uploader')
uploader = new uploader('OnclickSell.com/', 'avatar', 2)

let sender = require('../../packages/sender')




// var formidable = require('formidable');

router.post('/', async function(req, res, next) {
//   class auth1 {
//     constructor () {
//     }

//      test () {
//         // const auth = new authModel()
//         return 2
//     }
// }
    

const test2 = new auth(req)
console.log(await test2.GetAuth())
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

router.get('/updateuser', async (req, res, next) => {
  const test2 = new userModel()
  console.log(await test2.Update(2, {email: 'newsupdated@hotmail.com'}))
})

router.get('/createuser', async (req, res, next) => {
  const test2 = new userModel()
  const hash = await bcrypt.hash('Ar_newPassword', 10)
  try {
    console.log(await test2.Create({
      full_name: 'aliakbar Sultani',
      email: 'newCreatedUsferw@hotmail.com',
      sex: 'male',
      profile_picture: 'fsfsafsaf',
      password: hash}))
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