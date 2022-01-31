// Packages
const express = require('express')
const router = express.Router()


// Views

// Basic Controllers
router.get('/', (req, res) => {
	res.send('profil-page')
})
// Nested Controllers
router.get('/', (req, res) => {
	res.send('profil')
})
router.patch('/', (req, res) => {
	res.send('profil')
})
// Export
module.exports = router
