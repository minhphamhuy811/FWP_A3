const mongoose = require('mongoose')

const stringReq = {type: String, required: true}

const accountSchema = mongoose.Schema({
	email: stringReq,
    password: stringReq
})

module.exports = mongoose.model('admin', accountSchema)
