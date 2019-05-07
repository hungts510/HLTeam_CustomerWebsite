var express = require('express');
var router = express.Router();

// Require controller modules.
var product_controller = require('../controllers/productController');
var category_controller = require('../controllers/categoryController');
var order_controller = require('../controllers/orderController');
var order_detail_controller = require('../controllers/order_detailController');
var user_controller = require('../controllers/userController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', product_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/create', product_controller.book_create_get);

// POST request for creating Book.
router.post('/book/create', product_controller.book_create_post);

// GET request to delete Book.
router.get('/book/:id/delete', product_controller.book_delete_get);

// POST request to delete Book.
router.post('/book/:id/delete', product_controller.book_delete_post);

// GET request to update Book.
router.get('/book/:id/update', product_controller.book_update_get);

// POST request to update Book.
router.post('/book/:id/update', product_controller.book_update_post);

// GET request for one Book.
router.get('/book/:id', product_controller.book_detail);

// GET request for list of all Book items.
router.get('/books', product_controller.book_list);



// GET request for creating category. NOTE This must come before route for id (i.e. display category).
router.get('/category/create', category_controller.category_create_get);

// POST request for creating category.
router.post('/category/create', category_controller.category_create_post);

// GET request to delete category.
router.get('/category/:id/delete', category_controller.category_delete_get);

// POST request to delete category.
router.post('/category/:id/delete', category_controller.category_delete_post);

// GET request to update category.
router.get('/category/:id/update', category_controller.category_update_get);

// POST request to update category.
router.post('/category/:id/update', category_controller.category_update_post);

// GET request for one category.
router.get('/category/:id', category_controller.category_detail);

// GET request for list of all Authors.
router.get('/category', category_controller.category_list);



// GET request for creating a order. NOTE This must come before route that displays order (uses id).
router.get('/order/create', order_controller.order_create_get);

//POST request for creating order.
router.post('/order/create', order_controller.order_create_post);

// GET request to delete order.
router.get('/order/:id/delete', order_controller.order_delete_get);

// POST request to delete order.
router.post('/order/:id/delete', order_controller.order_delete_post);

// GET request to update order.
router.get('/order/:id/update', order_controller.order_update_get);

// POST request to update order.
router.post('/order/:id/update', order_controller.order_update_post);

// GET request for one order.
router.get('/order/:id', order_controller.order_detail);

// GET request for list of all order.
router.get('/order', order_controller.order_list);



// GET request for creating a order_detail. NOTE This must come before route that displays order_detail (uses id).
router.get('/order_detail/create', order_detail_controller.order_detail_create_get);

// POST request for creating order_detail. 
router.post('/order_detail/create', order_detail_controller.order_detail_create_post);

// GET request to delete order_detail.
router.get('/order_detail/:id/delete', order_detail_controller.order_detail_delete_get);

// POST request to delete order_detail.
router.post('/order_detail/:id/delete', order_detail_controller.order_detail_delete_post);

// GET request to update order_detail.
router.get('/order_detail/:id/update', order_detail_controller.order_detail_update_get);

// POST request to update order_detail.
router.post('/order_detail/:id/update', order_detail_controller.order_detail_update_post);

// GET request for one order_detail.
router.get('/order_detail/:id', order_detail_controller.order_detail_detail);

// GET request for list of all order_detail.
router.get('/order_detail', order_detail_controller.order_detail_list);


// GET request for creating a order. NOTE This must come before route that displays order (uses id).
router.get('/user/create', user_controller.user_create_get);

//POST request for creating order.
router.post('/user/create', user_controller.user_create_post);

// GET request to delete order.
router.get('/user/:id/delete', user_controller.user_delete_get);

// POST request to delete order.
router.post('/user/:id/delete', user_controller.user_delete_post);

// GET request to update order.
router.get('/user/:id/update', user_controller.user_update_get);

// POST request to update order.
router.post('/user/:id/update', user_controller.user_update_post);

// GET request for one order.
router.get('/user/:id', user_controller.user_detail);

// GET request for list of all order.
router.get('/user', user_controller.user_list);

module.exports = router;