const express = require('express')
const app = express()
const port = 3000


const mongoose = require('mongoose')



require('dotenv').config()

mongoose.connect('mongodb+srv://baocypher:Baocypher0912@teamvuer.qmxzn.mongodb.net/healthTracker', {
	useNewUrlParser: true
}).then(() => console.log('DB connected!')).catch(err => console.error(err))

const infoSchema = {
	name: String,
	id: Number,
	yearOfBirth: Number,
	gender: String,
	country: String,
	state: String,
	district: String,
	ward: String,
	address: String,
	phoneNumber: Number,
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
}

const info = mongoose.model('info', infoSchema)

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/App.js')
})

app.post('/', function(req, res) {
	let newInfo = new info ({
		name: req.body.fullName,
		id: req.body.id,
		yearOfBirth: req.body.birthYear,
		gender: req.body.gender,
		country: req.body.national,
		state: req.body.fullName,
		district: req.body.district,
		ward: req.body.ward,
		address: req.body.address,
		phoneNumber: req.body.phoneNumber,
		email: req.body.email,
		
		cough: req.body.cough,
		fever: req.body.fever,
		headache: req.body.headache,
		soreThroat: req.body.soreThroat,
		stuffNose: req.body.stuffNose,
		difficultyBreathing: req.body.difficultyBreathing,
		chestache: req.body.chestache,
		muscleache: req.body.muscleache,
		ageusia: req.body.ageusia,
		anosmia: req.body.anosmia,
		nausea: req.body.nausea,
		stomachache: req.body.stomachache,
	})
	newInfo.save()
	res.redirect('/')
})

app.listen(port, () => {
	console.log(`Server starting at http://localhost:${port}`)
})

