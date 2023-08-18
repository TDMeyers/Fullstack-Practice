const express = require('express')
const router = express.Router()
const logController = require('../controllers/logController')

// INDUCES

// Index
router.get('/',logController.index);

// New
router.get('/new',logController.new)

// Delete
router.delete('/:id', logController.delete)
// Update
router.put('/:id', logController.update)
// Create
router.post('/',logController.create)

// Edit
router.get('/:id/edit', logController.edit)
// Show
router.get('/:id',logController.show)

module.exports = router;