const express = require('express')
const accountSchema = require('../schemas/accountSchema')
const router = express.Router()

router.post('/', async (req, res) => {
	try {
		const register = new accountSchema(req.body)
		if(register === accountSchema.findOne({email: req.body.email, password: req.body.password})){
			res.header("Access-Control-Allow-Origin", "*")
			await register.save()
			res.send('Register successfully')
		}
		return res.status(400).json('Account has already signed up')
	}
	catch (e) {
		return res.status(400).json({error: e.toString()})
	}
})

module.exports = router
