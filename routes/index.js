var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController');

var csrf = require('csurf');
var csfrProtection = csrf({cookie: true});

//router.use(csfrProtection);


router.get('/',homeController.home);

router.get('/team',homeController.team);

router.get('/error404',homeController.error);

router.get('/faq',homeController.faq);

router.get('/wishlist',homeController.wishlist);

router.get('/single-product',homeController.info);

router.get('/order-status',homeController.status);

router.get('/forgot',homeController.forgot);

router.get('/my-account',csfrProtection,homeController.loginget);

router.get('/category',homeController.category);



module.exports = router;
