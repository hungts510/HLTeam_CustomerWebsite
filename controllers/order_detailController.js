var Order_detail = require('../models/order_detail');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all order_details.
exports.order_detail_list = function(req, res) {
    res.send('NOT IMPLEMENTED: order_detail list');
};

// Display detail page for a specific order_detail.
exports.order_detail_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: order_detail detail: ' + req.params.id);
};

// Display order_detail create form on GET.
exports.order_detail_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: order_detail create GET');
};

// Handle order_detail create on POST.
exports.order_detail_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: order_detail create POST');
};

// Display order_detail delete form on GET.
exports.order_detail_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: order_detail delete GET');
};

// Handle order_detail delete on POST.
exports.order_detail_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: order_detail delete POST');
};

// Display order_detail update form on GET.
exports.order_detail_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: order_detail update GET');
};

// Handle order_detail update on POST.
exports.order_detail_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: order_detail update POST');
};