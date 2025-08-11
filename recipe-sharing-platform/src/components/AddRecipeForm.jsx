import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";

    // Split ingredients by line breaks, filter out empty lines
    const ingredientsList = ingredients
      .split("\n")
      .map((i) => i.trim())
      .filter((i) => i.length > 0);
    if (ingredientsList.length < 2)
      newErrors.ingredients = "Please enter at least 2 ingredients";

    // Same for instructions
    const instructionsList = instructions
      .split("\n")
      .map((i) => i.trim())
      .filter((i) => i.length > 0);
    if (instructionsList.length === 0)
      newErrors.instructions = "Instructions are required";

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Here you would typically send data to a server or update state
    // For now, just log the recipe object
    const newRecipe = {
      title: title.trim(),
      ingredients: ingredients
        .split("\n")
        .map((i) => i.trim())
        .filter((i) => i.length > 0),
      instructions: instructions
        .split("\n")
        .map((i) => i.trim())
        .filter((i) => i.length > 0),
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Clear form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Add a New Recipe
      </h2>

      {/* Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block font-medium mb-1">
          Recipe Title
        </label>
        <input
          id="title"
          type="text"
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.title
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-blue-400"
          }`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter recipe title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      {/* Ingredients */}
      <div className="mb-4">
        <label htmlFor="ingredients" className="block font-medium mb-1">
          Ingredients (one per line)
        </label>
        <textarea
          id="ingredients"
          rows={4}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.ingredients
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-blue-400"
          }`}
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Example:&#10;200g spaghetti&#10;100g pancetta"
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
        )}
      </div>

      {/* Instructions */}
      <div className="mb-6">
        <label htmlFor="instructions" className="block font-medium mb-1">
          Preparation Steps (one per line)
        </label>
        <textarea
          id="instructions"
          rows={6}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.instructions
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-blue-400"
          }`}
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Example:&#10;Cook spaghetti according to package instructions.&#10;Fry pancetta until crisp."
        ></textarea>
        {errors.instructions && (
          <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
