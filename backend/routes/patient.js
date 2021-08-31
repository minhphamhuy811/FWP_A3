const express = require('express')
const patientSchema = require('../schemas/patientSchema')
const router = express.Router()

	router.post('/', async(req, res) => {
		res.header("Access-Control-Allow-Origin", "*")
		try {
			const patient = new patientSchema(req.body)
			await patient.save()
		}
		catch (e) {
			return res.status(400).json({error: e.toString()})
		}
		res.send('Patient declared successfully')
	})
	router.get('/', function(req,res) {
		res.header("Access-Control-Allow-Origin", "*")
		patientSchema.find({})
			.exec(function(err, patients) {
				if (err) {
					return res.send({
						err: err.message
					})}
				return res.send(patients)
			})
	} );
module.exports = router
