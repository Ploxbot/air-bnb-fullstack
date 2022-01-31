// Packages
const express = require('express')
const router = express.Router()


// Views

// Nested Controllers
router.get('/', (req, res) => {
	res.send('index')
})
// Export
module.exports = router
