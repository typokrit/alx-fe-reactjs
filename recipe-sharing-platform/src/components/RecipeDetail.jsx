import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Find the recipe by id from imported data
    const found = data.find((r) => r.id === parseInt(id, 10));
    if (found) {
      setRecipe(found);
      setError(null);
    } else {
      setError("Recipe not found");
    }
  }, [id]);

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <p className="text-red-500 text-center">{error}</p>
        <Link to="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  if (!recipe) {
    return <div className="container mx-auto p-6 text-center">Loading...</div>;
  }

  // Dummy example ingredients and steps (you can expand your data.json later)
  const ingredients = [
    "1 cup ingredient A",
    "2 tablespoons ingredient B",
    "3 cups ingredient C",
  ];

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <Link to="/" className="text-blue-500 hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
      />
      <p className="mb-6 text-gray-700">{recipe.summary}</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {ingredients.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default RecipeDetail;
