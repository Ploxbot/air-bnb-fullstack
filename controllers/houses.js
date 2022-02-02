// Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')
const Users = require('../models/houses')

// Views

router.get('/', async (req, res, next) => {
	try {
		//FIND HOUSES
		let houses = await Houses.find({})
		console.log(houses);
		//PASS TO TEMPLATE
		res.render('houses/list', { user: req.user, houses })
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

//ONE HOUSE CONTROLLER

router.get('/:id', async (req, res, next) => {
	// FIND HOUSE + POPULATE HOST
	try {
		let house = await Houses.findById(req.params.id).populate('host')
		console.log(house);
		// PASS HOUSE TO TEMPLATE
		res.render('houses/one', {user: req.user, house})
	} catch (err) {
			next (err)
	}
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
			req.body.host = req.user._id
			let house = await Houses.create(req.body)
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
