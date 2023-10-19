import React from 'react';
import classes from './offering.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from '../../assets/burger.png';
import img2 from '../../assets/pizza.png';
import img3 from '../../assets/pasta.png';
import img4 from '../../assets/sandwich.png';

export const Offering = () => {

    const responsive1 = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1324 },
          items: 4,
          slidesToSlide: 1,
        },
        desktop: {
          breakpoint: { max: 1324, min: 900 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 900, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    return (
        <div className={classes.Offering}>
            <h3>Something Special</h3>
            <h2>Our Delicious meals</h2>

            <Carousel responsive={responsive1} showDots={false} removeArrowOnDeviceType={["desktop","tablet", "mobile"]} autoPlaySpeed={1000} infinite={true} autoPlay={true}  keyBoardControl={false} >
                <div className={classes.productitem} data-aos="flip-left">
                <h3>Aloo tikki<br /> Burger</h3> 
                <img src={img} alt="" srcset="" />
                
                </div>
                <div className={classes.productitem} data-aos="flip-left">
                <h3>Double chezee<br /> pizza</h3> 
                <img src={img2} alt="" srcset="" />
                </div>

                <div className={classes.productitem} data-aos="flip-left">
                <h3>White sauce<br /> pasta</h3> 
                <img src={img3} alt="" srcset="" />
                </div>
                <div className={classes.productitem} data-aos="flip-left">
                <h3>Corn cheese<br /> sandwich</h3> 
                <img src={img4} alt="" srcset="" />
                </div>
            </Carousel>
        </div>
    )
}
