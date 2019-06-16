var Category = require('../models/category');

var moongose = require('mongoose');

moongose.connect('mongodb://localhost:27017/bookshop',{useNewUrlParser: true});

var category = [
    new Category({
    name: 'Sách Khám Phá',
    quantity: 20
    }),
    new Category({
        name: 'Sách Lịch Sử',
    }),
    new Category({
        name: 'Sách Nấu Ăn',
        quantity: 20
    }),
    new Category({
        name: 'Sách Âm Nhạc',
        quantity: 14
    }),new Category({
        name: 'Truyện Cười',
        quantity: 12
    })
];


var done =0;
for(var i = 0;i<category.length;i++){
    category[i].save(function(err,result){
        done++;
        if(done===category.length){
            exit();
        }
    });

}
function exit() {
    moongose.disconnect();
}