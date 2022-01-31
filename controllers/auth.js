// Packages
const express = require('express')
const router = express.Router()


// Views

// Basic Controller
router.get('/', (req, res) => {
	res.send('Authpage')
})

// Nested Controllers
router.get('/signup', (req, res) => {
	res.send('signup')
})
router.get('/login', (req, res) => {
	res.send('login')
})
router.post('/signup', (req, res) => {
  res.send('signup')
})
router.post('/login', (req, res) => {
	res.send('login')
})
router.get('/logout', (req, res) => {
	res.send('logout')
})
// Export
module.exports = router
