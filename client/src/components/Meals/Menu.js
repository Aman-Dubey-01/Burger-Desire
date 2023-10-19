import React, { useState } from 'react';
import classext from './Menu.module.css';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import GridComponent from './GridComponent';
import ProductNav from './ProductNav';


function Menu({ mealData }) {

  const uniqueList = ["Pizza", "Burger", "Sandwich", "Pasta", "Indian", "Chinese", "All"];
  const [meals, setMeals] = useState(mealData);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      category={meal.category}
      price={meal.price}
      url={meal.url}
    />
  ));

  const filterItem = (category) => {
    if (category === "All") {
      setMeals(mealData);
      return;
    }

    const updatedList = mealData.filter((curElem) => {
      return curElem.category === category;
    });

    setMeals(updatedList);

  };

  return (
    <>
      <div className={classext.MenuContainer}>
        <div className={classes.meal_section}>
          <div className={classes.meal_sec__head}>
            <h2>Delicious Meals</h2>
            <hr />
          </div>
          <ProductNav filterItem={filterItem} categoryList={uniqueList} />
          <GridComponent list={mealsList} columns={3} />
        </div>
      </div>
    </>
  )
}

export default Menu;