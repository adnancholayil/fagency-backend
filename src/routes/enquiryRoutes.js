const express = require('express');
const router = express.Router();
const enquiryController = require('../controllers/enquiryController');
const authController = require('../controllers/authController');

router.post('/', enquiryController.submitEnquiry);
router.get('/', authController.protect, enquiryController.getAllEnquiries);
router.patch('/:id/status', authController.protect, enquiryController.updateEnquiryStatus);

module.exports = router;
