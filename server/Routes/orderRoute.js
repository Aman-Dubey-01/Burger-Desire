const express = require('express');
const router = express.Router();
const cors = require('cors');
// const { createOrder } = require('../Controllers/orderController');
const { createOrder, getAllOrders, updateOrderStatus, getUserOrders } = require('../Controllers/orderController');

router.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));


router.post('/create', createOrder)

// router.get('/getorder', getAllOrders);
router.get('/:userId/getorder', getUserOrders);
// router.put('/update/:orderId', orderController.updateOrderStatus);


module.exports = router;