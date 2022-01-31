// Packages
const express = require('express')
const router = express.Router()


// Views

// Basic Controller
router.get('/', (req, res) => {
	res.send('houses-page')
})

//Nested Controllers
router.get('/', (req, res) => {
	res.render('houses')
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
