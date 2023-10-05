import { useState } from "react";
import "./App.css";
import Search from "./pages/Search";
import RecipeDetails from "./pages/RecipeDetails";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/**
  TODO
  - add nicer/modern styling throughout
    - decide on color palette
  - add more recipes to Recipes.js
  - add back button to RecipeDetails page
  - make filters on search page all in one row
  - make app accessible from the web (Netlify, GitHub, Vercel)
**/

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Show the search page as the index */}
          <Route
            index
            element={<Search setSelectedRecipe={setSelectedRecipe} />}
          />
          {/* Only show the recipe details page if the user has selected a valid recipe */}
          {selectedRecipe && (
            <Route
              path="/details"
              element={<RecipeDetails recipe={selectedRecipe} />}
            />
          )}
          {/* If the user goes to any other route or goes to the details without selecting a valid recipe, redirect to the search page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
