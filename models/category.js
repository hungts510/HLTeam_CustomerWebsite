var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type:String,required: true},
    quantity: {type:Number,required: true}
});

//xuất ra lớp mô hình Category
module.exports = mongoose.model('Category',schema);