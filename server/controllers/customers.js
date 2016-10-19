(function() {
    'use strict';

    var mongoose = require('mongoose');
    var Customer   = mongoose.model('Customer');

    module.exports = {
      index: _index,
      create: _create,
      delete: _delete,
    };

    function _index(req, res) {
      Customer.find({}, function(err, result) {
        if (err) {
          console.log(err);
          res.json({success: false});
        }
        else {
          res.json({success: true, data: result});
        }
      })
    }

    function _create(req, res) {
      Customer.create(req.body, function(err, result){
        if (err) {
          console.log(err);
          res.json({success: false});
        }
        else {
          res.json({success: true, data: result});
        }
      });
    }

    function _delete(req, res) {
      Customer.remove({_id: req.params.id}, function(err, result){
        if (err) {
          console.log(err);
          res.json({success: false});
        }
        else {
          res.json({success: true});
        }
      })
    }

})();
