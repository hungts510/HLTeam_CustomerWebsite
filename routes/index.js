var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/',homeController.home);

router.get('/my-account',homeController.login);

router.get('/team',homeController.team);

router.get('/error404',homeController.error);

router.get('/faq',homeController.faq);

router.get('/wishlist',homeController.wishlist);

router.get('/single-product',homeController.info);

router.get('/order-status',homeController.status);

router.get('/forgot',homeController.forgot);


module.exports = router;
