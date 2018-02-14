

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const wrapAsync = require('../../packages/wrapAsync')
const db = require('../../database/config');
const bcrypt = require('bcrypt');
const auth = require('../../packages/auth');



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


module.exports = router;