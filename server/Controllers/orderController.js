const Order = require("../models/order");
const User = require("../models/user");
const Product = require("../models/products");


exports.createOrder = async (req, res) => {
    try {
        const { user, items, totalAmount, contact } = req.body; // Receive items array with product ID and quantity

        const order = await Order.create({ user, items, totalAmount, contact });
        return res.status(201).json({ message: "Order created successfully", order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating the order' });
    }
};



// Get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('items.product');
        return res.status(201).json({ message: "Order fetched successfully", orders });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching orders' });
    }
};

// Update the backend code to get orders for a specific user
exports.getUserOrders = async (req, res) => {
    try {
      const { userId } = req.params;
      const orders = await Order.find({ user: userId }).populate('items.product');
      return res.status(200).json({ message: "User orders fetched successfully", orders });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching user orders' });
    }
  };
  

// Update order status
exports.updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating order status' });
    }
};
