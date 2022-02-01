1. check the form

<form class="" action="auth/signup" method="post"> // action sending the data to controller("post")
	<input type="text" name="email" value=""/>
	<input type="text" name="password" value=""/>
	<button name="button"></button> //no type - it will not send
</form>

2.

write a consolelog in the post controller
try to submit data - fill out the form
try to sumit an error

3.

router.post('/signup', async (req, res, next) => { //everyone async maybe use with the server
	try {
		console.log('asdsdf')
	} catch (err) {
		next (err)
	}
})


4. check data - write body of post controller

router.post('/signup', async (req, res, next) => {
	try {

		console.log('req.body') //log the data(object) of body
	} catch (err) {
		next (err)
	}
})

5. store data in database - import modelts to app.js

//Model - Import
module.exports = collection
//Controller - Export
const Users = require('../models/users')   //uppercase variable (convention) <-collection

router.post('/signup', async (req, res, next) => { //
	try {

//console.log('req.body')
	await Users.create(req.body)    //create Data in the Database
	} catch (err) {
		next (err)
	}
})

6. store the response

router.post('/signup', async (req, res, next) => { //
	try {

//console.log('req.body')
	let userJustCreated = await Users.create(req.body)
	console.log(userJustCreated)   // check log ID, _V
	} catch (err) {
		next (err)
	}
})

7. login request

router.post('/signup', async (req, res, next) => { //
	try {

//console.log('req.body')
	let userJustCreated = await Users.create(req.body)
//	console.log(userJustCreated)
	req.login(userJustCreated) 						// request

	res.redirect('houses')								// response
	} catch (err) {
		next (err)
	}
})

8. login error/successful ??? <-'' callback function

router.post('/signup', async (req, res, next) => { //
	try {

//console.log('req.body')
	let userJustCreated = await Users.create(req.body)
//	console.log(userJustCreated)
	req.login(userJustCreated, (err) => {
		// IF ERROR, THROW ERROR
		if (err) {
			throw err
		// ELSE REDIRECT TO HOUSES
		} else {
			res.redirect('/houses')
		}
	})
} catch (err) {
		next (err)
	}
})

9. check user exists // try with existsing mail and new mail // log>test, log>test

router.post('/signup', async (req, res, next) => { //
	try {

		// IF USER EXISTS
		let foundUser = await Users.findOne({ email: req.body.email })
		console.log({foundUser})  // logs word and oject to see what you logged
		// AFTER
		if (foundUser) {    			//
			throw new Error('User with this Email already exists')
		} else {

	let userJustCreated = await Users.create(req.body)

	req.login(userJustCreated, (err) => {

		// IF ERROR, THROW ERROR
		if (err) {
			throw err

		// ELSE REDIRECT TO HOUSES
		} else {
			res.redirect('/houses')
		}
	})
} catch (err) {
		next (err)
	}
})




// logout ---- get the code from the logout lecture add redirect // add try/catch
req.logout('logout')
req.session.destroy(err => {
	try {

		if (err) {
			next(err)
		}
		res.clearCookie('connect.sid')
		res.redirect('/login')
	})
	}

//in  nav.hbs
<a href="/auth/logout"



//authentication

router.get('/create', (req, res) => {
	if (!req.isAuthenticated()){
		res.redirect('auth/login')
	} else {
		res.render('houses/create')
	}
})

//NAV STATES two versions of the navbar
// in html code
<a href="/profil" >
//logout button
<a href="/auth/logout" >logout</a>
//login button
<a href="/auth/login" >login</a>

//requests

router.get('/', (req, res) => {
	console.log(req.user);
	res.render('houses/list', {req.user})
})

//in navbar
<p>{{user.email}}</p>
{{#if}}
<a href="/auth/logout" >logout</a>

{{else}}
<a href="/auth/login" >login</a>

{{/if}}

// replace avatar and name with {{avatar}}{{user}}

// 11. CREATE HOUSE
