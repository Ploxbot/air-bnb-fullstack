// Packages
const express = require('express')
const router = express.Router()

// Views

router.post('/', (req, res) => {
	if (!req.isAuthenticated()){
		res.redirect('auth/login')
	} else {
		res.send('bookings')
	}
})


// Export
module.exports = router
