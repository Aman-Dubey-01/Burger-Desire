import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Orders.module.css';
import Message, { EmptyCart } from '../UI/Message';
import SingleOrder from './SingleOrder';
import { UserContext } from '../../store/userContext';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);

    const fetchOrders = async (userId) => {
        try {
            const response = await axios.get(`/order/${userId}/getorder`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                setOrders(response.data.orders);
                setLoading(false);
            } else {
                setLoading(false);
                console.log('error');
            }
        } catch (error) {
            setLoading(false);
            console.error('Error fetching the order:', error);
        }
    };

    useEffect(() => {
        if (user) {
            fetchOrders(user.id);
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            fetchOrders(user.id);
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <>
            {user ? (
                <div>
                    <h1 className={classes.order_head}>My Orders</h1>
                    {!(orders.length > 0) && <h6 className={classes.order_err}>**Refresh the page if orders are not visible</h6>}
                    
                    {loading ? (
                        <p>Loading...</p>
                    ) : orders ? (
                        <div className={classes.orders} data-aos="zoom-in">
                            {orders.map((order) => (
                                <SingleOrder key={order.id} order={order} />
                            ))}
                        </div>
                    ) : (
                        <EmptyCart />
                    )}
                </div>
            ) : (
                <Message />
            )}
        </>
    );
}

export default Orders;
