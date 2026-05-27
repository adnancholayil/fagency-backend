const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const authController = require('../controllers/authController');

// Protected: only logged-in admin can upload
router.post('/', authController.protect, (req, res, next) => {
  const uploader = uploadController.uploadImage[0];
  uploader(req, res, function(err) {
    if (err) {
      console.error("MULTER/CLOUDINARY ERROR:", err);
      return res.status(500).json({ message: err.message || "Upload failed" });
    }
    uploadController.uploadImage[1](req, res, next);
  });
});

module.exports = router;
