/* eslint-disable no-mixed-spaces-and-tabs */
const express = require('express')
const accountSchema = require('../schemas/accountSchema')
const router = express.Router()

router.get('/', function(req,res) {
	accountSchema.find({})
		.exec(function(err, accounts) {
			if (err) {
				 res.send({
					err: err.message
				})}
			return res.send(accounts)
		})
});

router.post('/', async (req, res) => {
    try {
        const query  = accountSchema.where({email: req.body.email, password: req.body.password});
        query.findOne(function (err, accounts) {
            if (err) return res.send({err: err.message})
            if (accounts) {
                res.send({accounts})
            }
        })
    } catch (e) {
		return res.status(400).json({error: e.toString()})
	}
    res.send({
        token:'this is the only token'
    })
})
module.exports = router
