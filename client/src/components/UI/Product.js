import React, { useContext } from "react";
import classes from './product.module.css';

import MealItemForm from "../Meals/MealItem/MealItemForm";
import CartContext from "../../store/cart-context";

export default function Product(props) {

  const cartCtx = useContext(CartContext);

  const price = `₹ ${props.price}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };


  return (
<>
    {/* <div className={`${classes.card} ${classes.wrapup}`}>
      <img className={classes.product_image}  src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
        <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
      </p>
    </div> */}


    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
    </>
  );
}