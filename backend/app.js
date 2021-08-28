var patientRouter = require('./routes/patient')
var registerRouter = require('./routes/register')
var express = require('express')
var app = express()

var cookieParser = require('cookie-parser')
var logger = require('morgan')
const port = 3306
const mongo = require('./connectToMongoDB')

mongo()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/patient', patientRouter)
app.use('/getall', patientRouter)
app.use('/register', registerRouter)

app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
})
module.exports = app;
