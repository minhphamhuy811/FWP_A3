const express = require('express')
const accountSchema = require('../schemas/accountSchema');
const router = express.Router()

router.post('/', function(req,res) {
    res.header("Access-Control-Allow-Origin", "*")
    try {

        if (req.body.password !== undefined) {
            accountSchema.findOne({email: req.body.email})
                .exec(function(err, account) {
                    if (account.password !== req.body.password) {
                        accountSchema.updateOne({email: req.body.email}, {$set: {password: req.body.password}}).exec()
                        return res.status(200).send( "the password is updated" )
                    }
                    return res.status(422).send("can not change ward with the same ward")
                })
        }
        if (req.body.ward !== undefined) {
            accountSchema.findOne({email: req.body.email})
                .exec(function(err, account) {
                    if (account.ward !== req.body.ward) {
                        accountSchema.updateOne({email: req.body.email}, {$set: {ward: req.body.ward}}).exec()
                        return res.status(200).send( "the ward is updated" )
                    }
                    return res.status(422).send("can not change ward with the same ward")
                })
        }
        
    
        
    } catch (e) {
        return res.status(400).json({error: e.toString()})
    }
});

module.exports = router
