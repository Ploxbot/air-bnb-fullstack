// Packages
const express = require('express')
const router = express.Router()


// Views

// Nested Controllers
router.get('/', (req, res) => {
	res.redirect('/houses')
})
// Export
module.exports = router
