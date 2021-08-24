module.exports = (app) => {
	const patients = require('../controllers/patient.controller.js')

	// Create a new Product
	app.post('/patients', patients.post)
}
