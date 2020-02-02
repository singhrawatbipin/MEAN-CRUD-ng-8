const mongoose = require('mongoose');

var Registration = mongoose.model('Registration', {
    userName: { type: String },
    fName: { type: String },
    mName: { type: String },
    lName: { type: String },
    email: { type: String },
    phNumber: { type: Number},
    dob: { type: String},
    gender: { type: String },
    pswd: { type: String }
});

module.exports = { Registration };
