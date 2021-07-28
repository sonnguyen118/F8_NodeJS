const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');


router.get('/courses', adminController.show);
router.get('/garbage', adminController.garbage);
router.get('/:id/edit', adminController.edit);
router.put('/:id', adminController.update);
router.patch('/:id/restore', adminController.restore);
router.delete('/:id/force', adminController.destroy);
router.delete('/:id', adminController.delete);
router.get('/', adminController.index);

module.exports = router;
