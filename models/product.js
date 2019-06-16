var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type:String,required: true},
    title: {type:String,required: true},
    description: {type:String,required: true},
    price: {type:Number,required: true},
    nameCate: {type:String,required: true},
    Items: {type:String,required: true}
});

//xuất ra lớp mô hình Product
module.exports = mongoose.model('Product',schema);