// Packages
const express = require('express')
const router = express.Router()


// Views

// Basic Controllers

// Nested Controllers
router.get('/', (req, res) => {
	res.render('profile')
})
router.patch('/', (req, res) => {
	res.send('profile')
})
// Export
module.exports = router
