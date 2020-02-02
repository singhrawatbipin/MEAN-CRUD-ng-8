const mongoose = require('mongoose');

var Quotation = mongoose.model('Quotation', {
    businessName: { type: String },
    natureOfBusiness: { type: String },
    contactPerson: { type: String },
    email: { type: String },
    businessAddress: { type: String },
    website: { type: String },
    lNumber: { type: Number},
    reqDescription: { type: String }
});

module.exports = { Quotation };
