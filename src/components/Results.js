import React from "react";
import { Link, useLocation } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";

export const Results = () => {
  const location = useLocation();
  const term = location.state.term;
  const {
    data: meals,
    isPending,
    error,
  } = UseFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);

  return (
    <>
      <h2>Results for '{term}'</h2>
      <div className="results">
        {error && <div> {error} </div>}
        {isPending && <div>Loading...</div>}
        {meals &&
          meals.map((meal, i) => {
            return (
              <Link to={`/results/${meal.idMeal}`} key={i}>
                <div className="result">
                  <img src={meal.strMealThumb} style={{ width: "200px" }} />
                  <p className="meal-title">{meal.strMeal}</p>
                  <button className="read-more">Read more</button>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};
