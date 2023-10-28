import React from 'react';
import classes from './welcome.module.css';
import img from '../../assets/bg.png';
import img2 from '../../assets/bg_Left.png';
import { Button } from '../UI/Button';

import mealsImage from '../../assets/main2.jpg';
import MealsSummary from '../Meals/MealsSummary';


const Welcome = () => {
    return (
        <>
            <div className={classes['main-image']} data-aos="fade-down" data-aos-duration="700" >
                <img src={mealsImage} alt='' />
                
            </div>
            <MealsSummary />
            <div className={classes.container}>
            
                <img className={classes.container_img} src={img2} alt="" srcset="" />
                <div className={classes.container_left} data-aos="fade-down">

                    <h3>Welcome</h3>
                    <h2>We make the best <br /> burger in town</h2>
                    <p>We are glad to announce that our new business of best fast food services in the name 'Burger Desire' ( A Unit of AVA Food) is now LIVE. We at Burger Desire believe in high-quality and exceptional customer service and are determined</p>
                    <Button value={'More About us'} />
                </div>
                <div className={classes.container_right} data-aos="fade-up">
                    <img src={img} alt="" srcset="" />
                </div>
            </div>
        </>
    )
}

export default Welcome;
