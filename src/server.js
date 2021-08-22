const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/App.js')
})

app.listen(port, () => {
	console.log(`Server starting at http://localhost:${port}`)
})

