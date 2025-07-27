import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !description) return;
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
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
        placeholder="Recipe Description"
        style={{
          display: "block",
          margin: "10px 0",
          padding: "8px",
          width: "300px",
          height: "100px",
        }}
      />
      <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
