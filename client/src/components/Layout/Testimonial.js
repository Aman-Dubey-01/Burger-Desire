import React from 'react';
import classes from './Testimonial.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../../assets/rev1.jpg'
import img2 from '../../assets/rev2.jpg'
import img3 from '../../assets/rev3.jpg'

export const Testimonial = () => {

    const responsive2 = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 2,
            slidesToSlide: 1,
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div className={classes.Testimonial}>
            <div className={classes.Testimonial_head}>
                <h3>Testimonials</h3>
                <h2>Customer Review</h2>
            </div>


            <Carousel responsive={responsive2} showDots={false} infinite={true} autoPlay={false} autoPlaySpeed={2500}>
                <div className={classes.testimonial_review}>
                    <div>

                        <figure class={classes.card} data-aos="flip-up">
                            <img src={img1} alt="profile-sample3" class={classes.profile} />
                            <figcaption>

                                <blockquote>
                                    <p>The burgers at the popular joint surpassed my expectations.
                                        The patty was juicy and flavorful, complemented by fresh toppings.
                                        The staff was friendly, and the overall experience was delightful. Highly recommended!
                                    </p>
                                    <h2>Nalini Khare</h2>
                                    <h4>Rating: 4.8</h4>
                                </blockquote>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div className={classes.testimonial_review}>
                    <div>

                        <figure class={classes.card} data-aos="flip-up">
                            <img src={img2} alt="profile-sample3" class={classes.profile} />
                            <figcaption>

                                <blockquote>
                                    <p>The burgers at the popular joint surpassed my expectations.
                                        The patty was juicy and flavorful, complemented by fresh toppings.
                                        The staff was friendly, and the overall experience was delightful. Highly recommended!
                                    </p>
                                    <h2>Rahul Singh</h2>
                                    <h4>Rating: 5.0</h4>
                                </blockquote>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div className={classes.testimonial_review}>
                    <div>

                        <figure class={classes.card} ata-aos="flip-up">
                            <img src={img3} alt="profile-sample3" class={classes.profile} />
                            <figcaption>

                                <blockquote>
                                    <p>The burgers at the popular joint surpassed my expectations.
                                        The patty was juicy and flavorful, complemented by fresh toppings.
                                        The staff was friendly, and the overall experience was delightful. Highly recommended!
                                    </p>
                                    <h2>Ajey</h2>
                                    <h4>Rating: 4.2</h4>
                                </blockquote>
                            </figcaption>
                        </figure>
                    </div>
                </div>


            </Carousel>
        </div>
    )
}
