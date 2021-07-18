const express = require('express')
const app = express()
const port = 3000

app.get('./src/login', (req, res) => {
	res.status(200).send('login')
})

app.listen(port, () => {
	console.log(`Server starting at http://localhost:${port}`)
})
