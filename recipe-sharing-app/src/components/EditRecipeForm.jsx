import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ ...recipe, title, description });
    alert("Recipe updated!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{
          display: "block",
          margin: "10px 0",
          padding: "8px",
          width: "300px",
        }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{
          display: "block",
          margin: "10px 0",
          padding: "8px",
          width: "300px",
          height: "100px",
        }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
