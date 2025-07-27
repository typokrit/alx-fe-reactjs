import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      // Simple mock recommendation: recipes that are NOT favorited
      // but here you can add smarter logic
      const recommended = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id)
      );
      return { recommendations: recommended };
    }),
}));
