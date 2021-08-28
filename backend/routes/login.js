const express = require('express')
const loginSchema = require('../schemas/loginSchema')
const router = express.Router()

	router.post('/', async(req, res) => {
		try {
			const login = new loginSchema(req.body)
			await login.save()
		}
		catch (e) {
			res.status(400).json({error: e.toString()})
		}
		res.send('login declared successfully')
	})
	router.get('/', function(req,res) {
		loginSchema.find({})
			.exec(function(err, login) {
				if (err) {
					return res.send({
						err: err.message
					})}			   
				return res.send(login)
			})
	} );
module.exports = router
