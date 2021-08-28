const mongoose = require('mongoose')

const registerSchema = mongoose.Schema({
	user: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model('admin', registerSchema)
