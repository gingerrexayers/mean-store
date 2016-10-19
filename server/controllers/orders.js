(function() {
    'use strict';

    var mongoose = require('mongoose');
    var Product = mongoose.model('Product');
    var Customer = mongoose.model('Customer');
    var Order   = mongoose.model('Order');

    module.exports = {
      index: _index,
      create: _create,
    };

    function _index(req, res) {
      Order.find({}).populate('_customer _product').exec(function(err, result) {
        if (err) {
          console.log(err);
          res.json({success: false});
        }
        else {
          res.json({success: true, data: result});
        }
      });
    }

    function _create(req, res) {
      Customer.findOne({_id: req.body.customer}, function(err, c){
        if (err) {
          console.log(err);
          return res.json({success: false});
        } else {
          Product.findOne({_id: req.body.product}, function(err, p){
            if (err) {
              console.log(err);
              return res.json({success: false});
            } else {
              var o = new Order({_customer: c, _product: p, quantity: req.body.quantity});
              o.save(function(err){
                if (err) {
                  console.log(err);
                  return res.json({success: false});
                }
                else {
                  p.quantity -= o.quantity;
                  p.save();
                  return res.json({success: true});
                }
              });
            }
          });
        }
      });
    }

})();
