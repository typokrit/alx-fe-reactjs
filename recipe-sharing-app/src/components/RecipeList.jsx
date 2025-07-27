import React from "react";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "16px" }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <p>
              <strong>Prep Time:</strong> {recipe.prepTime} minutes
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
