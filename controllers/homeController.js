var Product =require('../models/product');

exports.home = (req, res) => {
  
  Product.find({Items : 'newItems'},function(err,docs){
    Product.find({Items : 'hotItems'},function(err,obj){
      res.render('index', {title: 'Trang Chủ', newItems:docs,hotItems: obj});
      })
    });
  };

exports.login = (req, res) => {
    res.render('my-account', {title: 'Đăng nhập-Đăng Ký'})
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

exports.info = (req, res) => {
  
    res.render('single-product', {title: 'sản phẩm'})
};

exports.status = (req,res ) => {
   res.render('order-status', {title : 'Trạng thái đơn hàng'})
};

exports.forgot = (req, res) => {
  res.render('forgot_password', {title: 'Quên mật khẩu'})
};