import React, { useContext, useEffect, useState } from 'react';
import classes from './Checkout.module.css';
import CartContext from '../../store/cart-context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SmallCartItem from '../Cart/SmallCartItem';
import { UserContext } from '../../store/userContext';
import Message from '../UI/Message';

const Checkout = () => {
    const navigate = useNavigate();
    const cartCtx = useContext(CartContext);
    const { user } = useContext(UserContext);
    const { items } = cartCtx;
    const [disabled, setDisabled] = useState(true);
    const [grandAmount, setGrandAmount] = useState(0);
    const [paymentSubmitted, setPaymentSubmitted] = useState(false);
    const [shipping, setShipping] = useState({
        name: '',
        phone: '',
        address: ''
    });


    const handleContactChange = (event) => {
        const { name, value } = event.target;
        setShipping({
            ...shipping,
            [name]: value
        });
    }

    const setAddress = () => {
        if (shipping.name && shipping.phone && shipping.address) {
            setDisabled(false);
        } else {
            alert("Please fill all the fields");
        }
    }
    console.log(user)

    const handleSubmitOrder = async (e) => {
        e.preventDefault();

        const order = {
            user: user.id,
            items: items.map((item) => ({
                product: item.id,
                amount: item.amount,
            })),
            totalAmount: grandAmount,
            contact: shipping,
        };

        try {
            console.log('order', order);
            const response = await axios.post('/order/create', order, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                setPaymentSubmitted(true);
                alert("Oder Placed Successfully");
                cartCtx.clearCart();
                navigate("/orders", { replace: true })

            } else {
                alert("Something went wrong");
                console.log(response);
            }
        } catch (error) {
            console.error('Error submitting the order:', error);
        }
    };

    useEffect(() => {
        let deliveryCharge = 50;
        if (cartCtx.items.length !== 0) {
            if (cartCtx.totalAmount < 500) {
                deliveryCharge = 50;
            } else {
                deliveryCharge = 0;
            }
        } else {
            deliveryCharge = 0;
        }

        const calculatedGrandAmount = cartCtx.totalAmount + deliveryCharge;
        setGrandAmount(calculatedGrandAmount);

    }, [cartCtx.items.length, cartCtx.totalAmount]);


    return (
        <>
            {user ?
                <div className={classes.payments}>
                    <div className={classes.left}>

                        <div className={`${classes["payment-section"]} ${classes["shipping-info"]}`}>

                            <h1>Shipping Address</h1>

                            <div className={classes.contact}>
                                <h3>contact</h3>
                                <input type="text" name='name' placeholder='Name' value={shipping.name} onChange={handleContactChange} />
                                <input type="text" name='phone' placeholder='Phone Number' value={shipping.phone} onChange={handleContactChange} />
                            </div>

                            <div className={classes.address}>
                                <h3>Address</h3>
                                <input type="text" name='address' placeholder='Address' value={shipping.address} onChange={handleContactChange} />
                            </div>
                            <button disabled={(!shipping.name || !shipping.address || !shipping.phone)} onClick={setAddress}>Confirm Address</button>
                            {(!shipping.name || !shipping.address || !shipping.phone) && <p className={classes.notice}>**Please fill in all shipping information </p>}
                        </div>


                        <div className={`${classes["payment-section"]} ${classes["payment-method"]}`}>
                            <h1>Payment Methods</h1>
                            <form className={classes.form}>

                                <div className={classes.total}>
                                    <h4>Total Amount:</h4>
                                    <h5>&#8377; {grandAmount}</h5>
                                </div>
                                <button disabled={disabled} onClick={handleSubmitOrder}>
                                    <span>Pay Now</span>
                                </button>
                                {disabled && <p className={classes.notice}>**Please fill in all shipping information to proceed.</p>}
                            </form>
                        </div>
                    </div>


                    <div className={classes.right}>
                        <div className={`${classes["payment-section"]} ${classes["order-review"]}`}>
                            <h1>Order Review</h1>
                            <div className={classes.total}>
                                <h3>Items : {cartCtx.items.length}</h3>
                                <h2>Total : &#8377; {grandAmount}
                                </h2>
                            </div>
                            <div className={classes["payment-product"]}>
                                {cartCtx.items.map((item) => (
                                    <SmallCartItem key={item.id}
                                        name={item.name}
                                        amount={item.amount}
                                        price={item.price}
                                        url={item.url}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                : <Message />}
        </>
    )
}



export default Checkout;