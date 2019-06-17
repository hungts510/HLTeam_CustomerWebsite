var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
    name: {type: String,required: true},
    email: {type: String,required: true},
    password: {type: String,required: true},
    birthday: {type: Date,required: true},
    nationality: {type: String,required: true}
});

module.exports = mongoose.model('User',User);