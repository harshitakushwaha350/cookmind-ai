
import "./CountryRecipes.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryRecipes() {

  const { countryName } = useParams();
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadRecipes() {

      try {

        setLoading(true);

        let area = countryName;

        if (countryName === "USA") area = "American";
        if (countryName === "Korea") area = "Korean";

        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
        );

        const data = await res.json();

        // Fallback if country recipes not available

        if (!data.meals || data.meals.length === 0) {

          const fallbackRes = await fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?s="
          );

          const fallbackData =
            await fallbackRes.json();

          setRecipes(
            fallbackData.meals || []
          );

        } else {

          setRecipes(data.meals);

        }

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    loadRecipes();

  }, [countryName]);

  return (

    <div className="country-page">

      <button
  className="back-home-btn"
  onClick={() => navigate("/")}
>
  ❮
</button>

      <div className="food food1">🍕</div>
      <div className="food food2">🍔</div>
      <div className="food food3">🍜</div>
      <div className="food food4">🌮</div>
      <div className="food food5">🍩</div>

      <div className="food-banner">

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600"
          alt="food"
        />

        <div className="banner-content">

          <span>
            🌍 Authentic {countryName} Cuisine
          </span>

          <h1>
            Taste Of {countryName}
          </h1>

          <p>
            Discover traditional dishes,
            local favorites and famous recipes.
          </p>

        </div>

      </div>

      <div className="trending-foods">

        <h2>
          🔥 Popular Dishes In {countryName}
        </h2>

      </div>

      {loading ? (

        <div
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "700",
            marginTop: "50px"
          }}
        >
          🍽 Loading Recipes...
        </div>

      ) : (

        <div className="recipe-grid">

          {recipes.map((recipe) => (

            <div
              key={recipe.idMeal}
              className="recipe-card"
              onClick={() =>
                navigate(
                  `/recipe/${recipe.idMeal}`
                )
              }
            >

              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              />

              <div className="recipe-overlay">

                <h2>
                  {recipe.strMeal}
                </h2>

                <div className="recipe-meta">

                  <span>
                    🍽 Authentic
                  </span>

                  <span>
                    ⭐ Popular
                  </span>

                </div>

                <button
                  className="video-btn"
                >
                  View Recipe →
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default CountryRecipes;

