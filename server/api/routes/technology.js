const express = require('express');
const router = express.Router();
const technologyController = require('../controllers/technologyController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');






// router.get('/', authMiddleware, userController.get_auth_user);
router.get('/', technologyController.get_technologies);
router.post('/', technologyController.add_technologies)
router.put('/', technologyController.update_technologies)
router.delete('/:id', technologyController.delete_technologies)

module.exports = router;