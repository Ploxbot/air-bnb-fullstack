// Packages
const express = require('express')
const router = express.Router()


// Views

// Nested Controllers
router.post('/', (req, res) => {
	res.send('profil')
})
// Export
module.exports = router
