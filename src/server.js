const express = require('express')
const app = express()
const port = 3000

const mongoose = require("mongoose");
const BodyParser = require("body-parser");

Mongoose.connect("mongodb://localhost/vntalking");

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
// Define REST API
app.post("/patient", async (request, response) => {

})



app.get('/', (req, res) => {
	res.sendFile(__dirname + '/App.js')
})

app.listen(port, () => {
	console.log(`Server starting at http://localhost:${port}`)
})

