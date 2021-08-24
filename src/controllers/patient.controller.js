const Patient = require('../schemas/tracker-schema.js')
const {getStorageValue} = require('../middleware/GetStorage')

//Create new Product
exports.post = (req, res) => {
	// Request validation
	if(!req.body) {
		return res.status(400).send({
			message: 'Patient Unknown!'
		})
	}

	// Create a Product
	const patient = new Patient({
		name: getStorageValue('fullName',''),
		id: getStorageValue('id',null),
		yearOfBirth: getStorageValue('birthYear',null),
		gender: getStorageValue('gender',''),
		country: getStorageValue('country',''),
		state: getStorageValue('city',''),
		district: getStorageValue('district',''),
		ward: getStorageValue('ward',''),
		address: getStorageValue('address',''),
		phoneNumber: getStorageValue('phoneNumber',null),
		email: getStorageValue('email',''),

		cough: getStorageValue('cough',false),
		fever: getStorageValue('fever',38),
		headache: getStorageValue('headache',false),
		soreThroat: getStorageValue('soreThroat',false),
		stuffNose: getStorageValue('stuffNose',false),
		difficultyBreathing: getStorageValue('difficultyBreathing',false),
		chestache: getStorageValue('chestache',false),
		muscleache: getStorageValue('muscleache',false),
		ageusia: getStorageValue('ageusia',false),
		anosmia: getStorageValue('anosmia',false),
		nausea: getStorageValue('nausea',false),
		stomachache: getStorageValue('stomachache',false),
	})

	// Save Product in the database
	patient.save()
		.then(data => {
			res.send(data)
		}).catch(err => {
			res.status(500).send({
				message: err.message || 'Error when input patient data!'
			})
		})
}


