import { useParams, useHistory } from "react-router-dom";
import UseFetch from "../UseFetch";

export const SingleMeal = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: meal,
    isPending,
    error,
  } = UseFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

  const ingredients = [];
  const newIng = [];
  const getIng = () => {
    for (let i = 1; i <= 20; i++) {
      if (meal[0][`strIngredient${i}`]) {
        ingredients.push(
          `${meal[0][`strIngredient${i}`]} - ${meal[0][`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }
  };
  {
    meal && getIng();
  }
  {
    meal &&
      newIng.push(
        meal[0].strInstructions.replace(/.(?=[A-Z])/g, "<br /><br />")
      );
  }

  return (
    <div>
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {meal && (
        <>
          <h2>{meal[0].strMeal}</h2>
          <div className="meal-main">
            <img src={meal[0].strMealThumb} />
            <div>
              <h3>Ingredients 🛒</h3>

              <ul>
                {ingredients.map((ing) => {
                  return <li>{ing}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="instruction">
            <h3>Instruction 🥢</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: newIng,
              }}
            ></p>
          </div>
        </>
      )}
      <button className="back-btn" onClick={() => history.goBack()}>
        Back to the result
      </button>
    </div>
  );
};
