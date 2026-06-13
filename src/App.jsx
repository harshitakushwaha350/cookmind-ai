import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ExploreRecipes from "./pages/ExploreRecipes";
import CountryRecipes from "./pages/CountryRecipes";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/explore"
        element={<ExploreRecipes />}
      />

      <Route
        path="/country/:countryName"
        element={<CountryRecipes />}
      />

      <Route
        path="/recipe/:recipeName"
        element={<RecipeDetails />}
      />
    </Routes>
  );
}

export default App;