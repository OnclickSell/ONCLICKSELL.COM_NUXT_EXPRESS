const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const wrapAsync = require('../../packages/wrapAsync')
const db = require('../../database/config');
const bcrypt = require('bcrypt');
import auth from '../../packages/auth'
let validator = require('../../packages/validator');
validator = new validator()


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