

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const wrapAsync = require('../../packages/wrapAsync')
const db = require('../../database/config');
const bcrypt = require('bcrypt');
const auth = require('../../packages/auth');
let validator = require('../../packages/validator');
validator = new validator()




router.get('/', wrapAsync(async function(req, res) {
   const data = await setTimeout(() => {
    //  return await setTimeout(() => {
         return 'working'
    //  }, 2000);
   }, 2000)



    return res.json({
        data: data
    })
    // Async error!
    throw Error('woops');
  }));

router.post('/validate', (req, res, next) => {


  validator.validate({
      email: ['required', 'email'],
      password: ['required', 'password']
    }, req.body).then(value => {
      res.status(200).json({
        message: 'passed'
      })
    })
    .catch(error => {
      res.status(400).json({
        message: error
      })
    })

})


module.exports = router;