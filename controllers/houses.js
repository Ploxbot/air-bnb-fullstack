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
	res.send('houses')
})
router.get('/create', (req, res) => {
	res.send('houses')
})
router.get('/:id', (req, res) => {
	res.send('houses')
})
router.get('/:id/edit', (req, res) => {
	res.send('houses')
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
