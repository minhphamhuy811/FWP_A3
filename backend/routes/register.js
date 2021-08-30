const express = require('express')
const accountSchema = require('../schemas/accountSchema')
const router = express.Router()

router.post('/', async (req, res) => {
	try {	
		accountSchema.findOne({
            email: req.body.email,
            password: req.body.password
        }).exec(function(err, account) {
			if (err) {
				return res.send({
					err: err.message
				})}
			res.send(account)
		})
		const register = new accountSchema(req.body)
		await register.save()
		res.send('Register successfully')
	}
	catch (e) {
		return res.status(400).json({error: e.toString()})
	}
})

module.exports = router
