// Packages
const express = require('express')
const router = express.Router()

// Views

router.post('/', (req, res) => {
	res.send('profil')
})

// Export
module.exports = router
