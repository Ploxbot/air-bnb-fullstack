mongoose.model('users', {
  avatar: String,
	email: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})

mongoose.model('houses', {
	description: {
		type: String,
		required: true
	},
	host: {
		type: ObjectId,
		ref: 'users',
		required: true
	},
	location: {
		type: String,
		required: true
	},
	photos: [String],
	price: {
		type: Number,
		required: true
	},
	rooms: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	}
})

mongoose.model('reviews', {
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
