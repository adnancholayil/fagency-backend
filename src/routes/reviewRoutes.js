const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

router.get('/', reviewController.getAllReviews);
router.post('/', authController.protect, reviewController.createReview);
router.delete('/:id', authController.protect, reviewController.deleteReview);

module.exports = router;
