var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
var Product =require('../models/product');

router.get('/',productController.index);



module.exports = router;