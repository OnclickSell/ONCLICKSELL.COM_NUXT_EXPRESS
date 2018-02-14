const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
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

router.get('/', authMiddleware, userController.get_auth_user);
router.get('/:id', userController.get_single_user);
router.put('/', authMiddleware, userController.update_single_user);
router.put('/password', authMiddleware, userController.update_user_password);
router.delete('/:id', authMiddleware, userController.delete_single_user);
router.post('/', authMiddleware, userController.add_user_profile);
router.post('/profile_picture', upload.single('profile_picture'), userController.update_profile_picture);

module.exports = router;