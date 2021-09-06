const express = require('express')
const patientSchema = require('../schemas/patientSchema')
const router = express.Router()

router.post('/', function(req,res) {
    res.header("Access-Control-Allow-Origin", "*")
    try {
    patientSchema.find({ward: req.body.ward})
        .exec(function(err, patients) {
            return res.send(patients)
        })
    } catch (e) {
        return res.status(400).json({error: e.toString()})
    }
});

module.exports = router
