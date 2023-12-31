import { useState } from "react";
import "./App.css";
import Search from "./pages/Search";
import RecipeDetails from "./pages/RecipeDetails";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
      <p style={{ textAlign: "center", marginTop: 20, color: "DimGray" }}>An application by <a style={{ fontSize: "medium" }} href="https://sites.google.com/view/egardner2019">Emma Gardner</a>.</p>
    </div>
  );
}

export default App;
