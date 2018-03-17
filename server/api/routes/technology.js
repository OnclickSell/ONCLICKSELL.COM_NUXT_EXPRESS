const express = require('express');
const router = express.Router();
// const technologyController = require('../controllers/technologyController');
import authMiddleware from '../middlewares/authMiddleware'
import TechnologyController from '../controllers/technologyController'
const adminMiddleware = require('../middlewares/adminMiddleware');






// router.get('/', authMiddleware, userController.get_auth_user);
router.get('/', async (req, res, next) => {
    const technologyController = new TechnologyController(req, res, next)
    return await technologyController.GetTechnology()
})
// router.post('/', technologyController.add_technologies)
// router.put('/', technologyController.update_technologies)
// router.delete('/:id', technologyController.delete_technologies)

module.exports = router;