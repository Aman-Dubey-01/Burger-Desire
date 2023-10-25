import SmallCartItem from "../Cart/SmallCartItem";
import classes from "./SingleOrder.module.css";

function SingleOrder({ order }) {

    return (
        <>
            <div className={classes.order} key={order._id}>
                
                <div className={classes.order_details}>
                    <div className={classes.order_text}>
                        <p className={classes.order__id}>Order On : <span>{order.orderDate.slice(11, 16) + "  " + (order.orderDate.slice(0, 10))}</span></p>
                        <p className={classes.order__id}>Order ID : <span>{order._id}</span></p>
                    </div>

                    <div className={classes.order__total}>
                        <h2>Total : &nbsp;
                            &#8377; {order.totalAmount}
                        </h2>
                    </div>
                </div>

                <div className={classes["payment-product"]}>
                    {order.items.map(item => (
                        <SmallCartItem
                            id={item._id}
                            name={item.product.Name}
                            amount={item.amount}
                            price={item.product.Price}
                            url={item.product.img}
                        />
                    ))}
                </div>


            </div>

        </>
    )
}

export default SingleOrder;