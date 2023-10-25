import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductItem() {
    const [mealData, setMealData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Set initial state to false
    const [httpError, setHttpError] = useState(null); // Set initial state to null

    const fetchMeals = async () => {
        try {
            const response = await fetch(
                'https://amandubeyroxx-default-rtdb.asia-southeast1.firebasedatabase.app/.json'
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();
            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].Name,
                    category: responseData[key].Category,
                    price: responseData[key].Price,
                    url: responseData[key].img
                });
            }

            setMealData(loadedMeals);
        } catch (error) {
            setHttpError(error.message);
        } finally {
            setIsLoading(false); // Set isLoading to false here
        }
    };
    console.log(mealData);


        const fetchProducts = async () => {
            try {
              const response = await axios.get('/products/fetch');
              // Handle a successful response here
              console.log(response);
            //   setData(response.data);
            } catch (error) {
              // Handle errors here
              console.log(error);
            } 
          };

    const createProduct = async (Category, Name, Price, img) => {
        try {
            const response = await axios.post('/products/create', {
                Category,
                Name,
                Price,
                img
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.data) {
                console.log("Created Successfully", response.data);
            } else {
                console.log("Something went wrong while creating the product.");
            }
        } catch (error) {
            console.error("Error creating the product:", error);
        }
    };

    const addProducts = () => {
        mealData.forEach((product) => {
            createProduct(product.category, product.name, product.price, product.url);
        });
    };
    

    return (
        <div style={{ textAlign: 'center' }}>
            {isLoading && <p>Loading...</p>}
            {httpError && <p>{httpError}</p>}
            <button onClick={fetchMeals}>Get Product</button>
            <button onClick={fetchProducts}>fetch Product</button>
            
            <button onClick={addProducts}>Add all</button>

        </div>
    );
}

export default ProductItem;
