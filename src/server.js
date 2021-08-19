const express = require('express')
const app = express()
const port = 3000

<<<<<<< HEAD
const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true
}).then(() => console.log('DB connected!')).catch(err => console.error(err))


app.get('/', (req, res) => {
	res.status(200).send('')
})

=======
>>>>>>> react-hook-form
app.listen(port, () => {
	console.log(`Server starting at http://localhost:${port}`)
})

