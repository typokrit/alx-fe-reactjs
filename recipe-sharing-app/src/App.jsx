import { Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📖 Recipe Sharing App</h1>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <RecipeList />
              <AddRecipeForm />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
