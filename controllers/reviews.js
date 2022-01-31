// Packages
const express = require('express')
const router = express.Router()


// Views

// Basic Controllers
router.get('/', (req, res) => {
	res.send('reviews-page')
})
// Nested Controllers
router.post('/', (req, res) => {
	res.send('profil')
})
// Export
module.exports = router
