import { Route, Routes } from "react-router-dom";
import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import Main from "./components/main";
import NewCart from "./components/Cart/NewCart";
import FetchData from "./components/Meals/FetchData";

import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "./components/ScrollToTop";
import Auth from "./components/Auth/Auth";
import { UserContextProvider } from "./store/userContext";
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Payment from "./components/Orders/Payment";
import Checkout from "./components/Orders/Checkout";
import Orders from "./components/Orders/Orders";

// import ProductItem from "./components/ProductItem";

AOS.init({
  offset: 100,
  delay: 100,
  duration: 900,
  easing: 'ease-in-out',
});

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.baseURL = 'https://burger-desire.onrender.com';

function App() {

  return (
    <UserContextProvider>
      <CartProvider>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element=<Main /> />
          <Route path="/Cart" element=<NewCart /> />
          <Route path="/payment" element=<Payment /> />
          <Route path="/checkout" element=<Checkout /> />
          <Route path="/orders" element=<Orders /> />
          <Route path="/Menu" element=<FetchData /> />
          <Route path="/auth" element=<Auth /> />
        </Routes>
        <Footer />
      </CartProvider>
    </UserContextProvider>
  )
}

export default App;
