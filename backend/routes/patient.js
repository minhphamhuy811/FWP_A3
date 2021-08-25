const express = require('express')
const patientSchema = require('../schemas/patientSchema')
const router = express.Router()

	// Create a new Product
	router.post('/', async(req, res, next) => {
		try {
			const patient = new patientSchema(req.body)
			await patient.save()
		}
		catch (e) {
			res.status(400).json({error: e.toString()})
		}
		res.send('Patient declared successfully')
	})

module.exports = router
