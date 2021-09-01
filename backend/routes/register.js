const express = require('express')
const accountSchema = require('../schemas/accountSchema')
const router = express.Router()

router.post('/', async (req, res) => {
	try {
		res.header("Access-Control-Allow-Origin", "*")
		accountSchema.findOne({email: req.body.email, password: req.body.password})
						.exec(function(err, register) {
							if (err) {
								return res.status(400).json('Account has already signed up')
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
