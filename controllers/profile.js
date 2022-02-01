// Packages
const express = require('express')
const router = express.Router()

// Views

router.get('/', (req, res) => {
	if (!req.isAuthenticated()){
		res.redirect('auth/login')
	} else {
		res.render('profile')
	}
})
router.patch('/', (req, res) => {
	if (!req.isAuthenticated()){
		res.redirect('auth/login')
	} else {
		res.send('profile')
	}
})

// Export
module.exports = router
