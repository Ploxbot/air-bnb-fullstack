// Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')


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
router.get('/create', (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			res.render('houses/create', { user: req.user })
		}
	} catch(err) {
		next(err)
	}
})

router.get('/:id', (req, res) => {
	res.render('houses/one')
})

router.get('/:id/edit', (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			res.render('houses/edit', { user: req.user })
		}
	} catch(err) {
		next(err)
	}
})

router.post('/', (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			//console.log('asdas');
			let newHouse = await Houses.create(req.body)
		}
	} catch(err) {
		next(err)
	}
})


router.patch('/:id', (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			res.send('houses')
		}
	} catch(err) {
		next(err)
	}
})

router.delete('/:id', (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			res.send('houses')
		}
	} catch(err) {
		next(err)
	}
})

// Export
module.exports = router
