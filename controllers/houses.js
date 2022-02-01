// Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')
const User = require('../models/users')


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

router.post('/', async (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			console.log(req.body);
			let house = await Houses.create(req.body, {host: = req.body._id})
			console.log(house)
			res.redirect(`/houses/${house._id}`)
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
