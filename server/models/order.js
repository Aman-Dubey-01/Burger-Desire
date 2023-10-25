const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to your User model
      required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to your Product model
      },
      amount: {
        type: Number,
        required: true,
      },

    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  contact: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    }
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  // Add more fields as needed (e.g., shipping address, payment details, etc.)
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
