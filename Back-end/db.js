const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/formDB', { useNewUrlParser: true }, (err) => {
    if(!err){
        console.log("MongoDB connection is established.");
    }
    else{
        console.log("Error in DB connection : " + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;
