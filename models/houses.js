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
