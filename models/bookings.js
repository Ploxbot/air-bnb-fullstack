const mongoose = require('mongoose')

mongoose.model('bookings', {
	author: {
		type: ObjectId,
		ref: 'users'
	},
	date: {
		type: ObjectDate,
		ref: 'houses'
	},
	description: {
		type: String,
		required: true
	},
	house: {
		type: ObjectId,
		ref: 'houses'
	},

})
