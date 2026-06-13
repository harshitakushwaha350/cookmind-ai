import "./RecipeSection.css";
import recipes from "../data/recipes";
import RecipeCard from "./RecipeCard";

function RecipeSection() {

  return (

    <section
      className="recipe-section"
      id="recipes"
    >

      <div className="recipe-float float1">🍔</div>
      <div className="recipe-float float2">🍕</div>
      <div className="recipe-float float3">🍜</div>
      <div className="recipe-float float4">🍩</div>
      <div className="recipe-float float5">🌮</div>

      <div className="recipe-blur blur-left"></div>
      <div className="recipe-blur blur-right"></div>

      <div className="container">

        <div className="recipe-top">

          <span className="recipe-tag">
            🍽 Premium Food Collection
          </span>

          <h2>
            Explore Trending Recipes
          </h2>

          <p>
            Discover chef specials,
            viral dishes and premium recipes.
          </p>

          <div className="recipe-stats">

            <div>
              <h3>10K+</h3>
              <span>Recipes</span>
            </div>

            <div>
              <h3>5K+</h3>
              <span>Food Lovers</span>
            </div>

            <div>
              <h3>4.9★</h3>
              <span>Ratings</span>
            </div>

          </div>

        </div>

        <div className="recipe-grid">

          {recipes.map((recipe) => (

            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />

          ))}

        </div>

      </div>

    </section>

  );
}

export default RecipeSection;