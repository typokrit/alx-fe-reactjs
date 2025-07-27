import React from "react";
import { Link } from "react-router-dom"; // <-- import Link
import { useRecipeStore } from "../store/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "20px" }}>
          <Link
            to={`/recipes/${recipe.id}`}
            style={{ textDecoration: "none", color: "blue" }}
          >
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
