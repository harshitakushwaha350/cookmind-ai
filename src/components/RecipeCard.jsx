import "./RecipeCard.css";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {

  const navigate = useNavigate();

  return (
    <div className="recipe-card">

      <div className="recipe-image-wrapper">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-image"
        />
      </div>

      <div className="recipe-content">

        <h2>{recipe.title}</h2>

        <p className="recipe-category">
          {recipe.category}
        </p>

        <div className="recipe-info">
          <span>⏱ {recipe.time}</span>
          <span>⭐ {recipe.rating}</span>
        </div>

       

        <button
          className="view-btn"
          onClick={() =>
            navigate(`/recipe/${encodeURIComponent(recipe.title)}`)
          }
        >
          View Full Recipe →
        </button>

      </div>

    </div>
  );
}

export default RecipeCard;