const express = require('express')
const registerSchema = require('../schemas/registerSchema')
const router = express.Router()

router.get('/', function(req,res) {
	registerSchema.find({})
		.exec(function(err, register) {
			if (err) {
				return res.send({
					err: err.message
				})}
			return res.send(register)
		})
} );
module.exports = router