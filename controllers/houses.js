// Packages
const express = require('express')
const router = express.Router()

// Views

router.get('/', (req, res, next) => {
	try {
		console.log(req.user)
		res.render('houses/list', { user: req.user })
	} catch (err) {
		next(err)
	}
})
//CREATE HOUSES CONTROLLER
router.get('/create', (req, res) => {
	if (!req.isAuthenticated()){
		res.redirect('auth/login')
	} else {
		res.render('houses/create')
	}
})
router.get('/:id', (req, res) => {
	res.render('houses/one')
})
router.get('/:id/edit', (req, res) => {
	if (!req.isAuthenticated()){
		res.redirect('auth/login')
	} else {
		res.render('houses/edit', { user: req.user })
	}
})
router.post('/', (req, res) => {
	if (!req.isAuthenticated()){
		res.redirect('auth/login')
	} else {
		res.send('houses')
	}
})
router.patch('/:id', (req, res) => {
	if (!req.isAuthenticated()){
		res.redirect('auth/login')
	} else {
		res.send('houses')
	}
})
router.delete('/:id', (req, res) => {
	if (!req.isAuthenticated()){
		res.redirect('auth/login')
	} else {
		res.send('houses')
	}
})

// Export
module.exports = router
