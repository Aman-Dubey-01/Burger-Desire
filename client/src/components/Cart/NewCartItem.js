import classes from './NewCartItem.module.css';

const NewCartItem = (props) => {
  const price = `₹${props.price}`;
  const totalprice = `₹${(props.price * props.amount).toFixed(2)}`;

  return (<>

    <table className={classes.carttable} >

      <tr className={classes['cart-item']}>
        <td className={classes.firsttd} >
          <span><img className={classes.cart_image} src={props.url} alt="product" /><h2>{props.name}</h2></span>
        </td>
        <td><span className={classes.price}>{price}</span></td>
        <td>
          <div className={classes.actions}>
            <button onClick={props.onRemove}>−</button>
            <span className={classes.amount}>{props.amount}</span>
            <button onClick={props.onAdd}>+</button>
          </div>
        </td>
        <td><span className={classes.price}>{totalprice}</span></td>
      </tr>
      <hr className={classes.itemrowline} />

    </table>



    {/* <li className={classes['cart-item']}>
      <div className={classes.item_box}>
        <img className={classes.cart_image} src={props.url} alt="product image" />

        <div className={classes.summary}>
          <h2>{props.name}</h2>
          <div>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {props.amount}</span>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li> */}
  </>
  );
};

export default NewCartItem;
