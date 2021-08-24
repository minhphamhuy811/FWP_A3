const express = require('express')
const app = express()
const port = 3001

const bodyParser = require('body-parser')

// Configuring the database
const mongoose = require('mongoose')
require('../src/routes/patient.routes.js')(app) //Add route file he


// Connecting to the database
mongoose.connect( 'mongodb+srv://baocypher:Baocypher0912@teamvuer.qmxzn.mongodb.net/healthTracker?retryWrites=true&w=majority', {
	useNewUrlParser: true
}).then(() => {
	console.log('Successfully connected to the database')
}).catch(err => {
	console.log('Could not connect to the database. Exiting now...', err)
	process.exit()
})


// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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

