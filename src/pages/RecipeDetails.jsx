import "./RecipeDetails.css";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { askGemini } from "../services/gemini";


function RecipeDetails() {
  const navigate = useNavigate();

  const { recipeName } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const [aiData, setAiData] = useState({
    calories: "Loading...",
    protein: "Loading...",
    carbs: "Loading...",
    fats: "Loading...",
    chefTips: "Loading...",
    suggestion: "Loading..."
  });


  useEffect(() => {

    async function loadRecipe() {

      try {

        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeName}`
        );

        const data = await res.json();

        if (data.meals) {

          const meal = data.meals[0];

          setRecipe(meal);


          const aiPrompt = `
Recipe Name: ${meal.strMeal}
Country: ${meal.strArea}
Category: ${meal.strCategory}

Give ONLY valid JSON.

{
  "calories":"estimated calories",
  "protein":"estimated protein",
  "carbs":"estimated carbs",
  "fats":"estimated fats",
  "chefTips":"one professional chef tip",
  "suggestion":"one serving suggestion"
}
`;

        const aiResponse = await askGemini(aiPrompt);

try {

  const cleanResponse = aiResponse
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const parsed = JSON.parse(cleanResponse);

  setAiData({
    calories: parsed.calories || "N/A",
    protein: parsed.protein || "N/A",
    carbs: parsed.carbs || "N/A",
    fats: parsed.fats || "N/A",
    chefTips: parsed.chefTips || "No tips available",
    suggestion: parsed.suggestion || "No suggestion available"
  });

} catch (err) {

  console.log("Gemini Parse Error:", err);
  console.log("Gemini Response:", aiResponse);

  setAiData({
    calories: "Approx 350 kcal",
    protein: "Approx 15g",
    carbs: "Approx 30g",
    fats: "Approx 12g",
    chefTips: "Use fresh ingredients for best flavour.",
    suggestion: `Serve ${meal.strMeal} with a side dish from ${meal.strArea}.`
  });

}

        }

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    }

    loadRecipe();

  }, [recipeName]);


  if (loading) {

    return (

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem"
        }}
      >
        🍽 Loading Recipe...
      </div>

    );

  }







  if (!recipe) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem"
        }}
      >
        😢 Recipe Not Found
      </div>
    );
  }



  return (


    <div className="recipe-page">

      <button
        onClick={() => navigate("/explore")}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: "9999",
          padding: "12px 18px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      >
        ←
      </button>

      <div className="recipe-hero">

        <img
          src={recipe.strMealThumb}
          alt={recipe.title}
        />

        <div className="hero-overlay">

          <span>
            👨‍🍳 Premium Recipe
          </span>

          <h1>
            {recipe.strMeal}
          </h1>

          <p>
            {recipe.strArea} • {recipe.strCategory}
          </p>

        </div>

      </div>

      <div className="recipe-content">

        <div className="ingredients-card">

          <h2>
            🥘 Ingredients
          </h2>

          <ul>



            {[...Array(20)].map((_, index) => {

              const ingredient =
                recipe[`strIngredient${index + 1}`];

              const measure =
                recipe[`strMeasure${index + 1}`];

              if (!ingredient) return null;

              return (

                <li key={index}>
                  {measure} {ingredient}
                </li>

              );

            })}


          </ul>

        </div>

        <div className="video-card">

          <h2>
            🎥 Video Tutorial
          </h2>

          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noreferrer"
            className="watch-btn"
          >
            ▶ Watch On YouTube
          </a>

        </div>

      </div>

      <div className="recipe-content">

        <div className="ingredients-card">



          <h2>📊 Nutrition Facts</h2>

          <p>🔥 Calories: {aiData.calories}</p>
          <p>💪 Protein: {aiData.protein}</p>
          <p>🍞 Carbs: {aiData.carbs}</p>
          <p>🧈 Fats: {aiData.fats}</p>

        </div>

        <div className="ingredients-card">

          <h2>🍽 Recipe Info</h2>

          <p>🌍 Country: {recipe.strArea}</p>

          <p>🍴 Category: {recipe.strCategory}</p>

          <p>🥘 Tags: {recipe.strTags || "Traditional"}</p>

        </div>



      </div>

      <div className="steps-card">

        <h2>
          👨‍🍳 Cooking Steps
        </h2>

        <div
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: "2"
          }}
        >
          {recipe.strInstructions}
        </div>

      </div>

      <div className="steps-card">

        <h2>
          💡 Chef Tips
        </h2>

        <p>
          {aiData.chefTips}
        </p>

      </div>

      <div className="steps-card">

        <h2>
          🤖 AI Suggestion
        </h2>


        <p>
          {aiData.suggestion}
        </p>
      </div>

    </div>

  );
}

export default RecipeDetails;