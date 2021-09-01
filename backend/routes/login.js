/* eslint-disable no-mixed-spaces-and-tabs */
const express = require('express')
const accountSchema = require('../schemas/accountSchema')
const router = express.Router()

router.get('/', function(req,res) {
    res.header("Access-Control-Allow-Origin", "*")
    accountSchema.find({})
		.exec(function(err, accounts) {
			if (err) {
				 return res.send({
					err: err.message
				})}
			return res.send(accounts)
		})
});

router.post('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        accountSchema.findOne({email: req.body.email})
            if(req.body.email === accountSchema.findOne({email})){
                        exec(function (err, accounts) {
            if (err) return res.send({err: err.message})
            if (accounts) {
                return res.send({
                    token:'this is the only token'
                })
            }
        })}
    } catch (e) {
		return res.status(400).json({error: e.toString()})
	}
})
module.exports = router
