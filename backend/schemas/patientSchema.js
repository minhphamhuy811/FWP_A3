const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
	fullName: stringReq,
	id: stringReq,
	birthYear: numberReq,
	gender: stringReq,
	country: stringReq,
	city: stringReq,
	district: stringReq,
	ward: stringReq,
	address: stringReq,
	phoneNumber: stringReq,
	email: stringReq,
	cough: booleanReq,
	fever: numberReq,
	headache: booleanReq,
	soreThroat: booleanReq,
	stuffNose: booleanReq,
	difficultyBreathing: booleanReq,
	chestache: booleanReq,
	muscleache: booleanReq,
	ageusia: booleanReq,
	anosmia: booleanReq,
	nausea: booleanReq,
	stomachache: booleanReq,
})

module.exports = mongoose.model('patient', patientSchema)
