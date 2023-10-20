import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import classes from '../../UI/product.module.css'; 

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      url:props.url,
      price: props.price
    });
  };
  
  return (

    <div className={`${classes.card} ${classes.wrapup}`} data-aos="zoom-in">
        <div>
          <img className={classes.product_image} src={props.url} alt="product" />
          <h3>{props.name}</h3>
          <div className={classes.category}>{props.category}</div>
          <div className={classes.price}>₹{props.price}</div>
        </div>
        
        <div>
          <MealItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>

      
  );
};

export default MealItem;
