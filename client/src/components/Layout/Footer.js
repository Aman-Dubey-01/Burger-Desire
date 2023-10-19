import React from 'react';
import classes from './footer.module.css';
import { AiOutlineFacebook, AiOutlineInstagram, AiFillTwitterSquare } from 'react-icons/ai';

export const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footer_logo}>
                <h2>🍔 𝕭𝖚𝖗𝖌𝖊𝖗 𝕯𝖊𝖘𝖎𝖗𝖊</h2>
            </div>
            <hr />

            <div className={classes.footer_main}>
                <div className={classes.footer_main_col}>
                <h3>Address</h3>
                    <div data-aos="flip-right">
                        
                        <h5>Registered Office</h5>
                        <p>G-123, Basement Sector-63, Noida, Uttar Pradesh, 201301</p>
                    </div>

                </div>
                <div className={classes.footer_main_col} >
                    <h3>Quick Link</h3>
                    <ul class={classes.footer__list} data-aos="flip-right">
                        <li>
                            <a href="/" class={classes.footer__link}>Home</a>
                        </li>
                        <li>
                            <a href="#about" class={classes.footer__link}>About</a>
                        </li>

                        <li>
                            <a href="#skills" class={classes.footer__link}>Menu</a>
                        </li>

                        <li>
                            <a href="#work" class={classes.footer__link}>Location</a>
                        </li>
                    </ul>
                </div>
                <div className={classes.footer_main_col}>
                    <h3> Our Menu</h3>
                    <ul class={classes.footer__list} data-aos="flip-right">
                        <li>
                            <a href="/" class={classes.footer__link}>Burger</a>
                        </li>
                        <li>
                            <a href="/" class={classes.footer__link}>Sandwich</a>
                        </li>

                        <li>
                            <a href="/" class={classes.footer__link}>Pasta</a>
                        </li>

                        <li>
                            <a href="/" class={classes.footer__link}>Pizza</a>
                        </li>
                        <li>
                            <a href="/" class={classes.footer__link}>Chineese</a>
                        </li>
                    </ul>
                </div>
                <div className={classes.footer_main_col}>
                    <h3> Social Links</h3>
                    <ul class={classes.footer__social} data-aos="flip-right">
                        <li>
                            <a href="" target="_blank" class={classes.footer__social_link1}>
                                <AiOutlineInstagram />
                            </a>Instagram
                        </li>
                        <li>
                            <a href="" target="_blank" class={classes.footer__social_link2}>
                                <AiFillTwitterSquare />
                            </a>Twitter
                        </li>
                        <li>
                            <a href="" target="_blank" class={classes.footer__social_link3}>
                                <AiOutlineFacebook />
                            </a>Facebook
                        </li>
                    </ul>
                </div>
            </div>

            <hr />
            <span class={classes.footer__copy}>
                &#169; Burger Desire. All rigths reserved
            </span>


        </div>
    )
}
