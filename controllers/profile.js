// Packages
const express = require('express')
const router = express.Router()

// Views

router.get('/', (req, res) => {
	res.render('profile')
})
router.patch('/', (req, res) => {
	res.send('profile')
})

// Export
module.exports = router
