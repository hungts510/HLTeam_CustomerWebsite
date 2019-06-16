var Product =require('../models/product');


exports.index = (req, res) => {
    Product.find(function(err,docs){
        res.render('shop-grid', {title: 'Cửa Hàng',data: docs})
   });
};
