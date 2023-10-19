
import React from 'react';
import classes from './button.module.css';

export const Button = (props) => {
  return (
    <button className={classes.Button_ani}>{props.value} </button>
  )
}
