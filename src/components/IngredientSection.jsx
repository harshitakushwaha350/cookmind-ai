import "./IngredientSection.css";
import { askGemini } from "../services/gemini";
import { useState } from "react";

function IngredientSection() {

  const [ingredients, setIngredients] =
    useState([]);

  const [input, setInput] =
    useState("");

  const [recipe, setRecipe] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [language, setLanguage] =
    useState("English");

  /* ADD */

  const addIngredient = () => {

    if (
      input.trim() !== ""
    ) {

      setIngredients([

        ...ingredients,

        input

      ]);

      setInput("");
    }
  };

  /* ENTER */

  const handleKeyDown = (e) => {

    if (e.key === "Enter") {

      addIngredient();
    }
  };

  /* REMOVE */

  const removeIngredient = (item) => {

    setIngredients(

      ingredients.filter(

        (ingredient) =>

          ingredient !== item
      )
    );
  };

  /* AI RECIPE */

  const generateRecipe = async () => {

    if (ingredients.length === 0) {

      setRecipe(
        language === "Hindi"
          ? "⚠️ कृपया कम से कम एक सामग्री जोड़ें।"
          : "⚠️ Please add at least one ingredient first."
      );

      return;
    }

    setLoading(true);

    const prompt = `
Available ingredients:

${ingredients.join(", ")}

Generate recipe in ${language} language.

Requirements:

${language === "Hindi"
        ? `
- Recipe Name in Hindi
- सामग्री (Ingredients)
- विधि (Steps)
- सुझाव (Tips)
- पूरा उत्तर हिन्दी में दें
`
        : `
- Recipe Name
- Ingredients
- Steps
- Tips
- Complete answer in English
`
      }

You may add basic kitchen ingredients like oil, salt, spices if required.
`;

    const result =
      await askGemini(prompt);

    setRecipe(result);

    setLoading(false);
  };

  return (

    <section className="ingredient-section">

      {/* FLOATING FOOD */}

      <div className="ingredient-food food-one">
        🍕
      </div>

      <div className="ingredient-food food-two">
        🍓
      </div>

      <div className="ingredient-food food-three">
        🍔
      </div>

      <div className="ingredient-food food-four">
        🥗
      </div>

      <div className="ingredient-container">

        {/* TOP */}

        <div className="ingredient-top">

          <h1>
            AI Ingredient Search 🍓
          </h1>

          <p>
            Add ingredients and discover
            amazing recipes powered by AI.
          </p>

        </div>

        {/* INPUT */}

        <div className="ingredient-input-box">

          <input
            type="text"
            placeholder="Add ingredients..."
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={handleKeyDown}
          />

          <button onClick={addIngredient}>

            Add Ingredient

          </button>

        </div>

        {/* LANGUAGE SELECTOR */}

        <div className="language-selector">

          <span>
            🌐 Language:
          </span>

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
          >

            <option value="English">
              English
            </option>

            <option value="Hindi">
              हिन्दी
            </option>

          </select>

        </div>

        {/* TAGS */}

        <div className="ingredient-tags">

          {

            ingredients.map(

              (item, index) => (

                <div
                  className="ingredient-tag"
                  key={index}
                >

                  🍓 {item}

                  <span
                    onClick={() =>
                      removeIngredient(item)
                    }
                  >

                    ✖

                  </span>

                </div>
              )
            )
          }

        </div>

        {/* BUTTON */}

        <div className="search-btn-wrapper">

          <button
            className="search-recipes-btn"
            onClick={generateRecipe}
          >

            {
              loading
                ? (language === "Hindi"
                  ? "🤖 रेसिपी बनाई जा रही है..."
                  : "🤖 Generating Recipe...")
                : "AI Suggest Recipes ✨"
            }

          </button>

        </div>

        {/* RESULT */}

        {
          recipe && (

            <div className="recipe-result">
              <div className="recipe-header">

                <h2>
                  🍽 AI Generated Recipe
                </h2>

                <button
                  className="clear-recipe-btn"
                  onClick={() => setRecipe("")}
                >
                  ✖ Clear
                </button>

              </div>

              <h2>

                {
                  language === "Hindi"
                    ? "🍽 AI द्वारा बनाई गई रेसिपी"
                    : "🍽 AI Generated Recipe"
                }

              </h2>

              <pre>
                {recipe}
              </pre>

            </div>

          )
        }

      </div>

    </section>
  );
}

export default IngredientSection;