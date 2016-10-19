var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
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

mongoose.model('Customer', CustomerSchema);
