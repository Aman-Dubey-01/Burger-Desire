import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import NewCartItem from './NewCartItem';
import classes from './NewCart.module.css';
import noitemimg from '../../assets/noitem.png';
import { Link } from 'react-router-dom';


function NewCart() {
    const cartCtx = useContext(CartContext);
    const [grandAmount, setGrandAmount] = useState(0);
    const { items } = cartCtx;

    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
    let deliveryCharge = 0;

    const hasItems = cartCtx.items.length > 0;

    useEffect(() => {
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
        setGrandAmount(calculatedGrandAmount.toFixed(2));

    }, [cartCtx.items.length, cartCtx.totalAmount]);

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({
            id: item.id,
            name: item.name,
            amount: 1,
            url: item.url,
            price: item.price
        });
    };


    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    console.log(cartCtx);
    return (<>
        <div className={classes.cart}>
            <div className={classes.carthead}>
                <h2>Your Cart</h2>
                <p>({numberOfCartItems} items)</p>
                <hr />
            </div>


            {hasItems ?

                <div>
                    <table >
                        <tr className={classes['cart-item']}>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        <hr />
                    </table>


                    <div className={classes.itembox}>
                        {cartCtx.items.map((item) => (
                            <NewCartItem key={item.id}
                                name={item.name}
                                amount={item.amount}
                                price={item.price}
                                url={item.url}
                                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                                onAdd={cartItemAddHandler.bind(null, item)}
                            />

                        ))}
                    </div>

                    <div className={classes.CartCheckout}>

                        <table>
                            <tr>
                                <td>Subtotal :</td>
                                <td>{totalAmount}</td>
                            </tr>
                            <hr className={classes.line} />
                            <tr>
                                <td>Delivery charges :</td>
                                <td>₹{deliveryCharge}</td>
                            </tr>
                            <hr className={classes.line} />
                            <tr>
                                <td>Coupon :</td>
                                <td>No coupon</td>
                            </tr>
                            <hr className={classes.line} />
                            <tr >
                                <td className={classes.grandtotal}>Grand Total :</td>
                                <td className={classes.grandtotal}>{grandAmount}</td>
                            </tr>
                            <Link to="/checkout">
                                <button className={classes.checkoutbtn}>
                                    Proceed to Checkout</button>
                            </Link>
                        </table>


                    </div>

                </div>
                : <div className={classes.noitem}>
                    <img src={noitemimg} alt="" />
                    <h4>Your cart is empty !! </h4>
                </div>}


        </div>

    </>

    )
}

export default NewCart