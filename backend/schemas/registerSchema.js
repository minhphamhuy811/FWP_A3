const mongoose = require('mongoose')

const stringReq = {type: String, required: true}

const registerSchema = mongoose.Schema({
	user: stringReq,
    password: stringReq
})

module.exports = mongoose.model('admin', registerSchema)
