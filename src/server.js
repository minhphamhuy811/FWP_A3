import { getStorageValue } from './useSessionStorage'
const express = require('express')
const app = express()
const port = 3000

const mongo = require('./mongo')
const infoSchema = require('./schemas/tracker-schema')

export const connectToMongoDB = async () => {
	await mongo().then(async (mongoose) => {
		try {
			console.log('Connected to mongodb!')

			const info = {
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
			}

			await new infoSchema(info).save()
		} finally {
			mongoose.connection.close()
		}
	})
}

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/App.js')
})

app.listen(port, () => {
	console.log(`Server starting at http://localhost:${port}`)
})

