const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('reviews', {
	author: {
		type: ObjectId,
		ref: 'users',
		required: true
	},
	date: {
		type: ObjectDate,
		ref: 'houses',
		required:  true
	},
	description: {
		type: String,
		required: true
	},
	house: {
		type: ObjectId,
		ref: 'houses',
		required: true
	},
	rating: {
		type: String,
		required: true
	}
})
