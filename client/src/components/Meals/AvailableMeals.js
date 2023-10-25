import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { responsive } from './MealItem/data';
import { Button } from '../UI/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();


  useEffect(() => {
    const fetchMeals = async () => {
        try {
          const response = await axios.get('/products/fetch');
          const product = response.data.products;
          setMeals(product);
        } catch (error) {
          setHttpError(error);
        } finally {
          setIsLoading(false);
        }
      };

    fetchMeals();
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
      key={meal._id}
      id={meal._id}
      name={meal.Name}
      category={meal.Category}
      price={meal.Price}
      url={meal.img}
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


