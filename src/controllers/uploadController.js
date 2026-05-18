const { upload } = require('../middleware/upload');

// POST /api/upload — single image upload, returns { url }
exports.uploadImage = [
  upload.single('image'),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    res.json({ url: req.file.path });
  }
];
