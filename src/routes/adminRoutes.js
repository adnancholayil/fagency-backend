const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');

router.get('/stats', authController.protect, adminController.getStats);

module.exports = router;
