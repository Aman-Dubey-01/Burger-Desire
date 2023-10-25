import classes from './SmallCartItem.module.css';

const SmallCartItem = (props) => {
    const price = `₹${props.price}`;
    const totalprice = `₹${(props.price * props.amount).toFixed(2)}`;

    return (
        <div >
            <li className={classes['cart-item']}>
                <div className={classes.item_box}>

                    <img className={classes.cart_image} src={props.url} alt="product image" />

                    <div className={classes.summary}>
                        <h2>{props.name}</h2>
                        <div>
                            <span className={classes.price}>{price}</span>
                            <span className={classes.amount}>   x {props.amount}</span>
                        </div>
                    </div>

                </div>
            </li>
        </div>
    );
};

export default SmallCartItem;
