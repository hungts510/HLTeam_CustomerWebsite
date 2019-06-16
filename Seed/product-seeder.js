var Product = require('../models/product');

var moongose = require('mongoose');

moongose.connect('mongodb://localhost:27017/bookshop',{useNewUrlParser: true});

var product = [
    new Product({
    imagePath: 'images/books/1.jpg',
    title: 'Our World Of Life',
    description : 'Sách hay, phù hợp mọi lứa tuổi',
    price : 400000,
    idcategory: 1,
    Items: "hotItems"
    }),
    new Product({
    imagePath: 'images/books/3.jpg',
    title: 'Our World',
    description : 'Sách hay, phù hợp mọi lứa tuổi',
    price : 300000,
    idcategory: 1,
    Items: "hotItems"
    }),
    new Product({
    imagePath: 'images/books/5.jpg',
    title: 'Life',
    description : 'Sách hay, phù hợp mọi lứa tuổi',
    price : 500000,
    idcategory: 1,
    Items: "hotItems"
    }),
    new Product({
    imagePath: 'images/books/7.jpg',
    title: 'World',
    description : 'Sách hay, phù hợp mọi lứa tuổi',
    price : 700000,
    idcategory: 1,
    Items: "newItems"
    }),
    new Product({
    imagePath: 'images/books/9.jpg',
    title: 'Sách Hay',
    description : 'Sách hay, phù hợp mọi lứa tuổi',
    price : 800000,
    idcategory: 1,
    Items: "newItems"
    }),
];

var done =0;
for(var i = 0;i<product.length;i++){
    product[i].save(function(err,result){
        done++;
        if(done===product.length){
            exit();
        }
    });

}
function exit() {
    moongose.disconnect();
}

