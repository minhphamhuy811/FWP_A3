const mongoose = require('mongoose')
const mongoPath = 'mongodb+srv://baocypher:Baocypher0912@teamvuer.qmxzn.mongodb.net/healthTracker?retryWrites=true&w=majority'

module.exports = async () => {
	await mongoose.connect(mongoPath, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
}