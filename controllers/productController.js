var Product =require('../models/product');
var Category = require('../models/category');


exports.index = (req, res) => {
    Product.find(function(err,docs){
        Category.find(function(err,obj){
            res.render('shop-grid', {title: 'Cửa Hàng',products: docs,cate: obj})
        })
   });
};

exports.info = (req, res) => {
    var perPage = 9
    var page = req.param('page')
    Product 
        .find({})
        .skip((perPage*page) - perPage)
        .limit(perPage)
        .exec(function(err, products) {
            if (err) return next(err)
            res.render('shop-grid', {
                products: products,
                current: page,
                pages: Math.ceil(count/perPage)
            })
        })
};

