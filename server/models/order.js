var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new mongoose.Schema({
  _customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },

  _product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },

  quantity: {
    type: Number,
    required: true,
  },

  }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

mongoose.model('Order', OrderSchema);
