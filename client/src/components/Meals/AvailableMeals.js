import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { responsive } from './MealItem/data';
import { Button } from '../UI/Button';
import { Link } from 'react-router-dom';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
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

      setMeals(loadedMeals);
      console.log(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  // offline data
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      category={meal.category}
      price={meal.price}
      url={meal.url}
    // url={meal.imageurl}
    />
  ));

  return (
    <>

      <div className={classes.meal_section}>
        <div className={classes.meal_sec__head}>
          <h3>Top meals</h3>
          <h2>Delicious Meals</h2>
        </div>
        <Carousel responsive={responsive} showDots={false} infinite={true} autoPlaySpeed={1400} draggable={true} >
          {mealsList}
        </Carousel>
        <div className={classes.button_meal}>
          <Link to='/Menu'>
            <Button value='More Dishes' />
          </Link>
        </div>

      </div>
    </>
  );
};

export default AvailableMeals;


