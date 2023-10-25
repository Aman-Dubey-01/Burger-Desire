import React from 'react';
import classes from './Message.module.css';
import img from '../../assets/loginmsg.svg'
import emptycart from '../../assets/empty.png'
import { Link } from 'react-router-dom';

export const EmptyCart = (props) => {
    return (
        <div className={classes['error-message']}>
            <img src={emptycart} alt="" />
            <h2>{props.value}</h2>
            <div className={classes["btn-group"]}>
                <Link to='/'>
                    <button className={`${classes.btn} ${classes['signin-btn']}`}  >Add items</button>
                </Link>
            </div>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes['error-message']}>
            <img src={img} alt="" />
            <h2>Please login to proceed</h2>
            <div className={classes["btn-group"]}>
                <Link to='/auth'>
                    <button className={`${classes.btn} ${classes['signin-btn']}`}>Sign-in to your account</button>
                </Link>
            </div>
        </div>
    )
}

export default Message;