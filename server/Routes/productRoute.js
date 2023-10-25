const express = require('express');
const router = express.Router();
const cors = require('cors');
const { getProduct, createProduct, getProductById } = require('../Controllers/productController');

router.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));


router.post('/create', createProduct)
router.get('/fetch', getProduct)
router.get('/product/:productId', getProductById);




module.exports = router;