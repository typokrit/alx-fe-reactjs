import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        marginTop: "10px",
        padding: "8px 16px",
        backgroundColor: "red",
        color: "white",
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
