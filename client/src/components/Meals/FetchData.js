import React, { useEffect, useState } from 'react';
import Menu from './Menu';

function FetchData() {
    const [mealData, setMealData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
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
                setIsLoading(false);
            } catch (error) {
                setHttpError(error.message);
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
