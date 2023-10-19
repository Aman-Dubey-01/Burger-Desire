import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import CartContext from './store/cart-context';
import classes from './components/Layout/Header.module.css';
// import { Button } from '../UI/Button';
import HeaderCartButton from './components/Layout/HeaderCartButton';
import App from './App';
import { Footer } from './components/Layout/Footer';


export const HeaderLayout = () => {

    return (
        <>
            <CartProvider >
                <Header />
                <Outlet />
                <Footer/>
            </CartProvider>
        </>

    )
};


