const express = require('express');
const router = express.Router();
import UserController from '../controllers/userController'
import AuthMiddleware from '../middlewares/authMiddleware'
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
    
    const userController = new UserController(req, res, next)
    return await userController.GetAuth()
    
})


router.get('/details', AuthMiddleware, async (req, res, next) => {
  
  const userController = new UserController(req, res, next)
  return await userController.GetUserDetails()
  
})
// router.get('/:id', userController.get_single_user);
// router.post('/', AuthMiddleware, async (req, res, next) => {
  
//   const userController = new UserController(req, res, next)
//   return await userController.UpdateUser()
  
// })

router.post('/', AuthMiddleware, async (req, res, next) => {
  try {
    const userController = new UserController(req, res, next)
    return await userController.UpdateUser()
  }catch(err) {
    console.log(err)
  }
})


// router.put('/avatar', userController.update_user_avatar);

// router.delete('/:id', authMiddleware, userController.delete_single_user);
// router.post('/', authMiddleware, userController.add_user_profile);
module.exports = router;