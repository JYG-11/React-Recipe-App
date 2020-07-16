import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ recipe }) => {
  const { label, calories, image, ingredients } = recipe;
  console.log(recipe);
  return (
    <div className={style.recipe}>
      <h1>{label}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <img className={style.image} src={image} alt=""></img>
    </div>
  );
};

export default Recipe;
