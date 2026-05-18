const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const authController = require('../controllers/authController');

// Protected: only logged-in admin can upload
router.post('/', authController.protect, ...uploadController.uploadImage);

module.exports = router;
