var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    author: {type:String,required: true},
    content: {type:String,required: true},
    itemId: {type:String,required: true},
    date: {type:String,required: true}
});

//xuất ra lớp mô hình Product
module.exports = mongoose.model('Comment',schema);