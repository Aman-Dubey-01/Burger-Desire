import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import './index.css';

// import CartProvider from './store/CartProvider';

// import App from './App';
// import { HeaderLayout } from './HeaderLayout';
// import Cart from './components/Cart/Cart';
// import Header from './components/Layout/Header';


// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <CartProvider><HeaderLayout /></CartProvider> ,
//         children: [
//             {
//                 path: '/',
//                 element: <App />
//             }
//         ]
//     },
//     {
//         path: '/new', element: <Header />,
//         children: [
//             {
//                 path: '/new',
//                 element: 'Aman hai'
//             }]
//     },

// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode >
//         <CartProvider>
//             <RouterProvider router={router} />
//         </CartProvider>
//     </React.StrictMode>
// )


