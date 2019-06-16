var Product =require('../models/product');
var Category = require('../models/category');


exports.index = (req, res) => {
    Product.find(function(err,docs){
        Category.find(function(err,obj){
            res.render('shop-grid', {title: 'Cửa Hàng',data: docs,cate: obj})
        })
   });
};
