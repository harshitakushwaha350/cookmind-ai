import "./RecipeDetails.css";
import { useParams } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeDetails() {

  const { recipeName } = useParams();

  const recipe = recipes.find(
    item =>
      item.title.toLowerCase() ===
      decodeURIComponent(recipeName).toLowerCase()
  );

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

      <div className="recipe-hero">

        <img
          src={recipe.image}
          alt={recipe.title}
        />

        <div className="hero-overlay">

          <span>
            👨‍🍳 Premium Recipe
          </span>

          <h1>
            {recipe.title}
          </h1>

          <p>
            {recipe.country} • {recipe.category}
          </p>

        </div>

      </div>

      <div className="recipe-content">

        <div className="ingredients-card">

          <h2>
            🥘 Ingredients
          </h2>

          <ul>

            {recipe.ingredients.map(
              (item,index)=>(

                <li key={index}>
                  {item}
                </li>

              )
            )}

          </ul>

        </div>

        <div className="video-card">

          <h2>
            🎥 Video Tutorial
          </h2>

          <a
            href={recipe.youtubeLink}
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

          <h2>
            📊 Nutrition Facts
          </h2>

          <p>🔥 Calories: {recipe.calories}</p>
          <p>💪 Protein: {recipe.protein}</p>
          <p>🍞 Carbs: {recipe.carbs}</p>
          <p>🧈 Fats: {recipe.fats}</p>

        </div>

        <div className="ingredients-card">

          <h2>
            🍽 Recipe Info
          </h2>

          <p>⏱ Time: {recipe.time}</p>
          <p>⭐ Rating: {recipe.rating}</p>
          <p>👨‍🍳 Chef: {recipe.chef}</p>
          <p>🍴 Servings: {recipe.servings}</p>

        </div>

      </div>

      <div className="steps-card">

        <h2>
          👨‍🍳 Cooking Steps
        </h2>

        <ol>

          {recipe.steps.map(
            (step,index)=>(

              <li key={index}>
                {step}
              </li>

            )
          )}

        </ol>

      </div>

      <div className="steps-card">

        <h2>
          💡 Chef Tips
        </h2>

        <p>
          {recipe.tips}
        </p>

      </div>

      <div className="steps-card">

        <h2>
          🤖 AI Suggestion
        </h2>

        <p>
          {recipe.aiSuggestion}
        </p>

      </div>

    </div>

  );
}

export default RecipeDetails;