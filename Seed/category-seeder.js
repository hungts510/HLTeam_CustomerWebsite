var Category = require('../models/category');

var moongose = require('mongoose');

moongose.connect('mongodb://localhost:27017/bookshop',{useNewUrlParser: true});

var category = [
    new Category({
        name: 'Sách Khám Phá',
        quantity: 20
    }),
    new Category({
        name: 'Tiểu thuyết',
        quantity: 10
    }),
    new Category({
        name: 'Tự truyện',
        quantity: 20
    }),
    new Category({
        name: 'Tác phẩm văn học',
        quantity: 14
    }),new Category({
        name: 'Self Study',
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