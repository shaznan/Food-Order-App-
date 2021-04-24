import React, { Fragment } from "react";
import AvailableMeals from "../Meals/AvailableMeals";
import MealsSummary from "../Meals/MealsSummary";

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default Meals;
