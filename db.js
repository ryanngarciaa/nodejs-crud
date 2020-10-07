const { json } = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB' ,{ useNewUrlParser: true }, (error) => {
    if (!error)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(error, undefined, 2));
});

module.exports = mongoose;