const mongoose = require('mongoose')

const stringReq = {type: String, required: true}
const booleanReq = {type: Boolean, required: true}
const numberReq = {type: Number, required: true}

const patientSchema = mongoose.Schema({
	name: stringReq,
	id: stringReq,
	yearOfBirth: numberReq,
	gender: stringReq,
	country: stringReq,
	state: stringReq,
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
