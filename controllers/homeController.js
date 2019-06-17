var Product =require('../models/product');
var User = require('../models/account');
var Category = require('../models/category');


exports.home = (req, res) => {
  
  Product.find({Items : 'newItems'},function(err,docs){
    Product.find({Items : 'hotItems'},function(err,obj){
      Category.find(function(err,cates){
        res.render('index', {title: 'Trang Chủ', newItems:docs,hotItems: obj,cate:cates});
      })
    })
  });
};

// exports.category = (req,res) => {
//   // Product.find({nameCate: 'Sách Lịch Sử'},function(err,obj){
//   //    Category.find(function(err,obj){
//   //           res.render('category', {title: 'Cửa Hàng',data: docs,cate: obj})          
//   //       })
//   // })
// }
exports.category = (req, res) => {
  console.log(req.param('name'));
  Product.find({nameCate: req.param('name')},function(err,obj){
    
    res.render('category', {data: obj})
    console.log(obj);
  })
};

exports.loginget = (req, res, next ) => {
    res.render('my-account',{csrfToken: req.csrfToken()});
};


exports.team = (req, res) => {
    res.render('team', {title: 'Đội Ngũ Phát Triển'})
};

exports.error = (req, res) => {
    res.render('error404', {title: 'Lỗi'})
};

exports.faq = (req, res) => {
    res.render('faq', {title: 'Các Câu hỏi'})
};

exports.wishlist = (req, res) => {
    res.render('wishlist', {title: 'Danh sách sản phẩm lựa chọn'})
};

exports.info =  (req, res) => {
    Product.findOne({_id: req.param('id')},function(err, obj){
      res.render('single-product', {title: 'sản phẩm',product: obj})
    });
};

exports.status = (req,res ) => {
   res.render('order-status', {title : 'Trạng thái đơn hàng'})
};

exports.forgot = (req, res) => {
  res.render('forgot_password', {title: 'Quên mật khẩu'})
};


