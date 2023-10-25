// import React, { useEffect, useState } from 'react';
// import Menu from './Menu';
// import axios from 'axios';

// function FetchData() {
//     const [productData, setProductData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [httpError, setHttpError] = useState();

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('/order/products',{
//                     headers: {
//                         'Content-Type': 'application/json',
//                     }
//                 });
//                 // const response = await fetch('order/products'); // Replace with your backend API endpoint

//                 if (!response.ok) {
//                     throw new Error('Something went wrong!');
//                 }

//                 const responseData = await response.json();
//                 setProductData(responseData.product);
//                 console.log(responseData.product);
//                 console.log(responseData);
//                 setIsLoading(false);
//             } catch (error) {
//                 setHttpError(error.message);
//                 setIsLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     useEffect(() => {   
//         const createProduct = async () => {

//             const createProduct= productData.map((product) => {
//                 return {
//                     Category: product.Category,
//                     Name: product.Name,
//                     Price: product.Price,
//                     img: product.img
//                 };
//             });
//             try {
//                 const response = await axios.post('/products/create',createProduct,{
//                     headers: {
//                         'Content-Type': 'application/json',
//                     }

//                 });

//                 if (!response.ok) {
//                     throw new Error('Something went wrong!');
//                 }

//                 const responseData = await response.json();
//                 // setProductData(responseData.product);
//                 // console.log(responseData.product);
//                 console.log(responseData);
//                 setIsLoading(false);
//             } catch (error) {
//                 setHttpError(error.message);
//                 setIsLoading(false);
//             }
//         };
//     }, []);

//     return (
//         <>
//             {isLoading && <p>Loading...</p>}
//             {httpError && <p>{httpError}</p>}
//             {!isLoading && !httpError && <Menu productData={productData} />}
//         </>
//     );
// }

// export default FetchData;



import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import axios from 'axios';

function FetchData() {
    const [mealData, setMealData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            try {
              const response = await axios.get('/products/fetch');
              const product = response.data.products;
              setMealData(product);
            } catch (error) {
              setHttpError(error);
            } finally {
              setIsLoading(false);
            }
          };

        fetchMeals();
    }, []);
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {httpError && <p>{httpError}</p>}
            {!isLoading && !httpError && <Menu mealData={mealData} />}
        </>
    );
}

export default FetchData;
