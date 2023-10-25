import React, { useState } from 'react';
import classext from './Menu.module.css';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import GridComponent from './GridComponent';
import ProductNav from './ProductNav';


function Menu({ mealData }) {

  const uniqueList = ["Pizza", "Burger", "Sandwich", "Pasta", "Indian", "Chinese", "All"];
  const [meals, setMeals] = useState(mealData);
  console.log("mealData",mealData);

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

  const filterItem = (category) => {
    if (category === "All") {
      setMeals(mealData);
      return;
    }

    const updatedList = mealData.filter((curElem) => {
      return curElem.Category === category;
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