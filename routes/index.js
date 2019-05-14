var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
// router.get('/', function(req, res) {
//   res.redirect('/catalog');
// });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Website Khach Hang' });
});

router.get('/my-account', function(req, res, next) {
  res.render('my-account', { title: 'Website Khach Hang' });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Website Khach Hang' });
});

router.get('/wishlist', function(req, res, next) {
  res.render('wishlist', { title: 'Website Khach Hang' });
});

router.get('/error404', function(req, res, next) {
  res.render('error404', { title: 'Website Khach Hang' });
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Website Khach Hang' });
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Website Khach Hang' });
});

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456789',
  database:'singleproduct',
});
connection.connect();

router.get('/shop-grid', function(req, res, next){ 
  connection.query('select * from sanpham', function(error, result, fields){
    if(error) throw error;
    res.render('shop-grid', { data: result });
  });
});




router.get('/single-product', function(req, res, next) {
  res.render('single-product', { title: 'Website Khach Hang' });
});

router.get('/forgot_password', function(req, res, next) {
  res.render('forgot_password', { title: 'Website Khach Hang' });
});

router.get('/account_setting', function(req, res, next) {
  res.render('account_setting', { title: 'Website Khach Hang' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Website Khach Hang' });
});

router.get('/my-order', function(req, res, next) {
  res.render('my-order', { title: 'Website Khach Hang' });
});

router.get('/order-status', function(req, res, next) {
  res.render('order-status', { title: 'Website Khach Hang' });
});

router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Website Khach Hang' });
});
module.exports = router;
