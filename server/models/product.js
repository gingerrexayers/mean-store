var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  _orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }]

  }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

mongoose.model('Product', ProductSchema);
