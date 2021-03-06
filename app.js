var express = require('express');
var path = require('path');
var logger = require('morgan');
var moongose = require('mongoose');

const url = require('url');  
const querystring = require('querystring'); 

var csrf = require('csurf');
var csrfProtection = csrf({cookie: true});

var index = require('./routes/index');
var cartRouter = require('./routes/cart');
var checkoutRouter = require('./routes/checkout');
var accountRouter = require('./routes/account');
var orderRouter = require('./routes/order');
var productRouter = require('./routes/product');


var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');



var app = express();

moongose.connect('mongodb://localhost:27017/bookshop',{useNewUrlParser: true});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));




// routes
app.use('/', index);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/account_setting', accountRouter); // my profile
app.use('/my-order', orderRouter);
app.use('/shop',productRouter);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: 'mysupersecret',resave: false,saveUninitialized: false}));

app.use(csrfProtection);

// app.use(function (req, res, next) {
//   res.cookie('XSRF-TOKEN', req.csrfToken());
//   res.locals.csrftoken = req.csrfToken();
//   next();
// });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render('error', {status:err.status, message:err.message});
});


module.exports = app;