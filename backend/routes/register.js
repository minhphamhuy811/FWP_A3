const express = require('express')
const accountSchema = require('../schemas/accountSchema')
const router = express.Router()

router.post('/', async (req, res) => {
	res.header("Access-Control-Allow-Origin", "*")
	try {
		accountSchema.findOne({email: req.body.email})
		.exec(function(err, register) {
		
			if (register === null) {
				register = new accountSchema(req.body)
				register.save()
				return res.status(200).send('Register successfully')
				
			}
			
			return res.status(422).send({
				error: 'That email address is already exist',
				statusCode: 422,
				message: 'Mail exists'
			});
		})
	} catch (e) {
		return res.status(400).json({error: e.toString()})
	}
})

module.exports = router
