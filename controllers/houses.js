// Packages
const express = require('express')
const router = express.Router()

// Views

router.get('/list', (req, res) => {
	res.render('houses/list')
})
router.get('/create', (req, res) => {
	res.render('houses/create')
})
router.get('/:id', (req, res) => {
	res.render('houses/one')
})
router.get('/:id/edit', (req, res) => {
	res.render('houses/edit')
})
router.post('/', (req, res) => {
	res.send('houses')
})
router.patch('/:id', (req, res) => {
	res.send('houses')
})
router.delete('/:id', (req, res) => {
	res.send('houses')
})

// Export
module.exports = router
