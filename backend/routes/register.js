const express = require('express')
const registerSchema = require('../schemas/registerSchema')
const router = express.Router()

router.post('/', async (req, res) => {
	try {
		const register = new registerSchema(req.body)
		await register.save()
	}
	catch (e) {
		return res.status(400).json({error: e.toString()})
	}
	res.send('Register successfully')
})
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
