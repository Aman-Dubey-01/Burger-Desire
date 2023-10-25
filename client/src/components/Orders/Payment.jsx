import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import axios from 'axios';

function Payment() {
  const cartCtx = useContext(CartContext);
  const { items, totalAmount } = cartCtx;
  const [isPaymentSubmitted, setPaymentSubmitted] = useState(false);
  const [orders, setOrders] = useState([]);
  const [productDetails, setProductDetails] = useState([]);


  const handleSubmitOrder = async () => {
    const order = {
      items: items.map((item) => ({
        product: item.id,
        amount: item.amount,
      })),
      totalAmount: totalAmount,
      

    };

    try {
      console.log('order', order);
      const response = await axios.post('/order/create', order, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setPaymentSubmitted(true);
      } else {
        // Handle errors or display an error message
      }
    } catch (error) {
      console.error('Error submitting the order:', error);
      // Handle errors or display an error message
    }
  };

  const handlegetOrder = async () => {
    try {
      const response = await axios.get('/order/getorder', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        setOrders(response.data.orders);
        console.log('orders data', response.data);

        console.log('first orders ', response.data.orders[0]);
        console.log('first orders item', response.data.orders[0].items);
        console.log('first orders name', response.data.orders[0].items[0].product.Name);


      } else {
        // Handle errors or display an error message
        console.log('error');
      }
    } catch (error) {
      console.error('Error fetching the order:', error);
      // Handle errors or display an error message
    }
  }


  return (
    <div>
      <h2>Payment</h2>
      {isPaymentSubmitted ? (
        <p>Payment has been submitted successfully.</p>
      ) : (
        <>
          <p>Order Summary:</p>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} x {item.amount}
              </li>
            ))}
          </ul>
          <p>Total Amount: ₹{totalAmount.toFixed(2)}</p>
          <button onClick={handleSubmitOrder}>Submit Payment</button>
        </>
      )}

      {/* fetch order  */}
      <button onClick={handlegetOrder}>fetch order</button>

      {/* Render the fetched orders */}
      orders: {orders.map((order) => (
        <div key={order._id}>
          <p>Order ID: {order._id}</p>
          <p>Order Amount: ₹{order.totalAmount.toFixed(2)}</p>
          <p>Order Items:</p>
          <ul>
            {order.items.map((item) => (
              <li key={item._id}>
                {item.product.Name} x {item.amount}
              </li>
            ))}
          </ul>
          <hr />
        </div>
      ))}



    </div>
  );
}

export default Payment;
