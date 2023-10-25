const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  Category: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
