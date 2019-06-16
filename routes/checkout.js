var express = require('express');
var router = express.Router();
const checkoutController = require('../controllers/checkoutController');

router.get('/',checkoutController.index);
module.exports = router;