const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
	name: String,
	id: String,
	yearOfBirth: Number,
	gender: String,
	country: String,
	state: String,
	district: String,
	ward: String,
	address: String,
	phoneNumber: String,
	email: String,
	cough: Boolean,
	fever: Number,
	headache: Boolean,
	soreThroat: Boolean,
	stuffNose: Boolean,
	difficultyBreathing: Boolean,
	chestache: Boolean,
	muscleache: Boolean,
	ageusia: Boolean,
	anosmia: Boolean,
	nausea: Boolean,
	stomachache: Boolean,
})

module.exports = mongoose.model('patient', patientSchema)
