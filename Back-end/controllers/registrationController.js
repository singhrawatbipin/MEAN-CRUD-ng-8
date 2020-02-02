const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Registration } = require('../models/registration');

router.get('/', (req, res) => {
    Registration.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in retrieving Registrations : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    {
        return res.status(400).send('No record with given id : ${req.params.id}');
    }

    Registration.findById(req.params.id, (err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in retrieving user by id : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var reg = new Registration({
        userName: req.body.userName,
        fName: req.body.fName,
        mName: req.body.mName,
        lName: req.body.lName,
        email: req.body.email,
        phNumber: req.body.phNumber,
        dob: req.body.dob,
        gender: req.body.gender,
        pswd: req.body.pswd
    });
    reg.save((err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log("Error in Posting the Data : " + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
