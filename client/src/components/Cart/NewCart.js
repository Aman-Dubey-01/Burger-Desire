import React, { useContext } from 'react';
import CartProvider from '../../store/CartProvider';
import CartContext from '../../store/cart-context';
import NewCartItem from './NewCartItem';
import classes from './NewCart.module.css';
import noitemimg from '../../assets/noitem.png';


function NewCart() {
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

    const deliverycharge = +50;




    const grandAmount = `₹${(cartCtx.totalAmount + deliverycharge).toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };


    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    console.log(cartCtx);
    return (<>
        <CartProvider>
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
                                    <td>₹{deliverycharge}.00</td>
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
                                <button className={classes.checkoutbtn}>Proceed to Checkout</button>
                            </table>


                        </div>

                    </div>
                    : <div className={classes.noitem}>
                        <img src={noitemimg} alt="" />
                        <h4>Your cart is empty !! </h4>
                    </div>}


            </div>
        </CartProvider>

    </>

    )
}

export default NewCart