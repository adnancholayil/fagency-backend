const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authController = require('../controllers/authController');

router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.post('/', authController.protect, projectController.createProject);
router.put('/:id', authController.protect, projectController.updateProject);
router.delete('/:id', authController.protect, projectController.deleteProject);

module.exports = router;
