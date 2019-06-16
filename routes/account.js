var express = require('express');
var router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/',accountController.setting);

module.exports = router;