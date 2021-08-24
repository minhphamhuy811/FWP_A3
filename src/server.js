const express = require('express')
const app = express()
const port = 3001

const infoSchema = require('./schemas/tracker-schema')
const mongoose = require('mongoose');

const mongoPath = 'mongodb+srv://baocypher:Baocypher0912@teamvuer.qmxzn.mongodb.net/healthTracker?retryWrites=true&w=majority'

const mongo = async () => {
	await mongoose.connect(mongoPath, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
}

// Configuring the database
const connectToMongoDB = async () => {
	await mongo().then(async mongoose => {
		try {
			console.log('connected to mongo DB')

			const patient = {
				name: '',
				id: 123123123,
				yearOfBirth: 1234,
				gender: 'male',
				country: 'vietnam',
				state: 'HCM',
				district: 'TB',
				ward: '8',
				address: '987 sege',
				phoneNumber: '123123123',
				email: 'eamil',

				cough: false,
				fever: 38,
				headache: false,
				soreThroat: false,
				stuffNose: false,
				difficultyBreathing: false,
				chestache: false,
				muscleache: false,
				ageusia: false,
				anosmia: false,
				nausea: false,
				stomachache: false,
			}
			await new infoSchema(patient).save()
		} finally {
			mongoose.connection.close()
		}
	})
}

connectToMongoDB()
// CORS
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})


// default route
app.get('/', (req, res) => {
	res.json({'message': 'Welcome to COVID-19 Vietnam\'s App'})
})

app.listen(port, () => {
	console.log(`Server starting at http://localhost:${port}`)
})

