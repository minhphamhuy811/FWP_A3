import mongo from '../mongo'
import {getStorageValue} from './GetStorage'
import infoSchema from '../schemas/tracker-schema'

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
