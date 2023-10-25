import axios from 'axios';
import classes from './Orders.module.css';
import { useContext, useEffect, useState } from 'react';
import Message, { EmptyCart } from '../UI/Message';
import SingleOrder from './SingleOrder';
import { UserContext } from '../../store/userContext';

function Orders() {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(UserContext);

    const handlegetOrder = async () => {
        try {
            console.log('user', user.id)
            const response = await axios.get(`/order/${user.id}/getorder`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('response', response);

            if (response.status === 200) {
                setOrders(response.data.orders);
                console.log('orders', response.data.orders);


            } else {
                // Handle errors or display an error message
                console.log('error');
            }
        } catch (error) {
            console.error('Error fetching the order:', error);
            // Handle errors or display an error message
        }
    }

    useEffect(() => {
        handlegetOrder();
    }, [])

    console.log('user', user)


    return (<>
        {user ?
            <div>
                <h1 className={classes.order_head}>My Orders</h1>
                {orders ?
                    <div className={classes.orders}>
                        {orders.map((order) => (
                            <SingleOrder order={order} />
                        ))}
                    </div> : <EmptyCart />
                }
            </div>
            : <Message />}
    </>
    )
}

export default Orders