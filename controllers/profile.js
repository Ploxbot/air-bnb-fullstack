// Packages
const express = require('express')
const router = express.Router()

// Views

router.get('/', (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			res.render('profile', {user: req.user})
		}
	} catch(err) {
		next(err)
	}
})


router.patch('/', (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			res.render('profile')
		}
	} catch(err) {
		next(err)
	}
})

// Export
module.exports = router
