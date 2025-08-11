import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";

    const ingredientsList = ingredients
      .split("\n")
      .map((i) => i.trim())
      .filter((i) => i.length > 0);
    if (ingredientsList.length < 2)
      newErrors.ingredients = "Please enter at least 2 ingredients";

    const stepsList = steps
      .split("\n")
      .map((i) => i.trim())
      .filter((i) => i.length > 0);
    if (stepsList.length === 0) newErrors.steps = "Steps are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      title: title.trim(),
      ingredients: ingredients
        .split("\n")
        .map((i) => i.trim())
        .filter((i) => i.length > 0),
      steps: steps
        .split("\n")
        .map((i) => i.trim())
        .filter((i) => i.length > 0),
    };

    console.log("New Recipe Submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline"
        type="button"
      >
        ← Go Back
      </button>

      <form onSubmit={handleSubmit}>
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
            placeholder={"Example:\n200g spaghetti\n100g pancetta"}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div className="mb-6">
          <label htmlFor="steps" className="block font-medium mb-1">
            Steps (one per line)
          </label>
          <textarea
            id="steps"
            rows={6}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
              errors.steps
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-400"
            }`}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder={
              "Example:\nCook spaghetti according to package instructions.\nFry pancetta until crisp."
            }
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
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
    </div>
  );
};

export default AddRecipeForm;
