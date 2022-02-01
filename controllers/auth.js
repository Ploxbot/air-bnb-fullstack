// PACKAGES
const express = require('express')
const router = express.Router()

//MOLDEL IMPORT
const Users = require('../models/users')


//GET LOGIN CONTROLLER
router.get('/login', (req, res) => {
	res.render('login')
})

//GET SIGNUP CONTROLLER
router.get('/signup', (req, res) => {
	res.render('signup')
})

//POST LOGIN CONTROLLER
router.post('/login', async (req, res) => {
	console.log(req.body);
	let searchUser = await Users.findOne({
		email: req.body.email,
		password: req.body.password
	})
	console.log('search user: ', searchUser);
	})

//POST SINGNUP CONTROLLER
router.post('/signup', async (req, res, next) => {
	try {
	//USER EXSISTS CHECK
		let searchUser = await Users.findOne({email: req.body.email })
		console.log({searchUser});
		if (searchUser) {
			throw new Error('User-Email alread exsists')
		} else {
			let newUser = await Users.create(req.body)
	//LOGIN AUTOMATION
			req.login(newUser, (err) => {
				if (err) {
					throw err
				} else {
					res.redirect('/houses')
				}
			})
		}
	} catch (err) {
		next (err)
	}
})

router.get('/logout', (req, res) => {
	res.send('logout')
})

// Export
module.exports = router
