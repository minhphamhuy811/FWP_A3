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
            .exec(function (err, accounts) {
                if (accounts === null) {
                    return res.status(406).send({
                        error: "there is no account registered with this email address",
                        statusCode: 406
                    })
                }

                if (accounts.password !== req.body.password) {
                    return res.status(406).send({
                        error: 'wrong password',
                        statusCode: 406
                    });
                }
                return res.send({
                    token:'this is the only token',
                    ward: accounts.ward
                })
            })
        
    } catch (e) {
		return res.status(400).json({error: e.toString()})
	}
})
module.exports = router
