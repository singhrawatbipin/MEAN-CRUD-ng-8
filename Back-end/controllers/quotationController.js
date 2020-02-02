const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Quotation } = require('../models/quotation');

router.get('/', (req, res) => {
    Quotation.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in retrieving Quotations : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    {
        return res.status(400).send('No record with given id : ${req.params.id}');
    }

    Quotation.findById(req.params.id, (err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in retrieving user by id : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var quot = new Quotation({
        businessName: req.body.businessName,
        natureOfBusiness: req.body.natureOfBusiness,
        contactPerson: req.body.contactPerson,
        email: req.body.email,
        businessAddress: req.body.businessAddress,
        wesite: req.body.wesite,
        lNumber: req.body.lNumber,
        reqDescription: req.body.reqDescription
    });
    quot.save((err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log("Error in Posting the Data : " + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No Record With Given id : ${req.params.id}');
    }

    var quot =  {
        businessName: req.body.businessName,
        natureOfBusiness: req.body.natureOfBusiness,
        contactPerson: req.body.contactPerson,
        email: req.body.email,
        businessAddress: req.body.businessAddress,
        wesite: req.body.wesite,
        lNumber: req.body.lNumber,
        reqDescription: req.body.reqDescription
    };
    Quotation.findByIdAndUpdate(req.params.id, { $set: quot }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { this.console.log('Error in Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No Record With Given id : ${ req.params.id }');
    }

    Quotation.findByIdAndRemove(req.params.id, (err, resp) => {
        if(!err) { res.send(resp); }
        else { this.console.log('Error in Deleting Selected Details : ' + JSON.stringify(err, undefined, 2)); }
    });
}); 

module.exports = router;
