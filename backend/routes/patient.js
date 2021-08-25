const express = require('express')
const patientSchema = require('../schemas/patientSchema')
const router = express.Router()

	// Create a new Product
	router.post('/', async(req, res, next) => {
		const patient = new patientSchema(req.body)
		await patient.save()

		res.send('Patient declared successfully')
		next()
	})

module.exports = router
