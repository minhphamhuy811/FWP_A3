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
        accountSchema.findOne({
            email: req.body.email,
            password: req.body.password
        })
            .exec(function(err, accounts) {
                res.send({accounts})

                if (err) {
                    return res.send({
                        err: err.message
                    })}
                res.send({accounts})
            })
	    res.send({
            token:'this is the only token'
	    })
    } catch (e) {
		return res.status(400).json({error: e.toString()})
	}
})
module.exports = router