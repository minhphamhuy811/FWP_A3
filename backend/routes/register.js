const express = require('express')
const accountSchema = require('../schemas/accountSchema')
const router = express.Router()

router.post('/', async (req, res) => {
	res.header("Access-Control-Allow-Origin", "*")
	try {
		accountSchema.findOne({email: req.body.email, password: req.body.password})
						.exec(function(err, register) {
							if (err || register.email === req.body.email) {
								return res.status(422).send({
									error: 'That email address is already in use',
									statusCode: 422
								});
							}
							register = new accountSchema(req.body)
							register.save()
							res.send('Register successfully')
						})
			}
			catch (e) {
				return res.status(400).json({error: e.toString()})
		}
})

module.exports = router
