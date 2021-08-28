const mongoose = require('mongoose')

const loginSchema = mongoose.Schema({
	user: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model('admin', loginSchema)
