const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/dashboard', authController.dashboard);
router.get('/logout', authController.logout);

module.exports = router;