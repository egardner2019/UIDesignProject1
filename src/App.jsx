import { useState } from "react";
import "./App.css";
import Search from "./pages/Search";
import RecipeDetails from "./pages/RecipeDetails";

/**
  TODO
  - use useState and useEffect to set heat of burner and oven within RecipeDetails.jsx
  - move all/most of the styling to App.css
  - add nicer/modern styling throughout
    - decide on color palette
  - add functionality to button click within instructions section of RecipeDetails.jsx
  - create oven component
    - add conditional color rendering
    - add dynamic temperature text
  - create recipe component for Search.jsx
  - add more recipes to Recipes.js
  - add back button to RecipeDetails page
  - make filters on search page all in one row
  - change the color of the burners in Burner.jsx
  - change favicon
  - make app accessible from the web (Netlify, GitHub, Vercel)
**/

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="App">
      {selectedRecipe ? (
        <RecipeDetails recipe={selectedRecipe} />
      ) : (
        <Search setSelectedRecipe={setSelectedRecipe} />
      )}
    </div>
  );
}

export default App;
