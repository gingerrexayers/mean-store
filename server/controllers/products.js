(function() {
    'use strict';

    var mongoose = require('mongoose');
    var Product   = mongoose.model('Product');

    module.exports = {
      index: _index,
      create: _create,
    };

    function _index(req, res) {
      Product.find({}, function(err, result) {
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
      Product.create(req.body, function(err, result){
        if (err) {
          console.log(err);
          res.json({success: false});
        }
        else {
          res.json({success: true, data: result});
        }
      });
    }

})();
