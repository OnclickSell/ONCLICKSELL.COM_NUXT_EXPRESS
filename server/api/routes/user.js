const express = require('express');
const router = express.Router();
import userController from '../controllers/userController'
import authMiddleware from '../middlewares/authMiddleware'
const adminMiddleware = require('../middlewares/adminMiddleware');
import auth from '../../packages/auth'
// const upload  = require('../../packages/multer');

const multer  = require('multer')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '../profile_pictures')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
  
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'profile_pictures')
  },
  filename: function (req, file, cb) {
    cb(null, 'user_avatar.jpg')
  }
})

var upload = multer({ storage: storage })
  // var upload = multer({ dest: 'profile_pictures'
  
  // })

// router.post('/', (req, res, next) => {
//     return userController.test(req, res, next);
// });

router.get('/', async (req, res, next) => {
    
    const UserController = new userController(req, res, next)
    return await UserController.GetAuth()
    
});
// router.get('/:id', userController.get_single_user);
// router.put('/', userController.update_user_details);
// router.put('/avatar', userController.update_user_avatar);
// router.put('/password', authMiddleware, userController.update_user_password);
// router.delete('/:id', authMiddleware, userController.delete_single_user);
// router.post('/', authMiddleware, userController.add_user_profile);
module.exports = router;