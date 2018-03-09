const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
import authMiddleware from '../middlewares/authMiddleware'
const adminMiddleware = require('../middlewares/adminMiddleware');






// router.get('/', authMiddleware, userController.get_auth_user);
router.get('/', ticketController.get_tickets);
router.post('/', ticketController.add_ticket)
router.post('/comment/:id', ticketController.add_comment)
router.put('/:id', ticketController.close_ticket)

module.exports = router;